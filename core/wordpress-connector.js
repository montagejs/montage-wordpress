var Montage = require("montage/core/core").Montage,
    Promise = require("montage/core/promise").Promise;

exports.WordpressConnector = Montage.specialize({

    constructor: {
        value: function WordpressConnector() {

        }
    },

    delegate: {
        value: null
    },

    token: {
        set: function (val) {
            if (!val) {
                sessionStorage.removeItem('montage-wordpress-access_token');
            } else {
                sessionStorage.setItem('montage-wordpress-access_token', val);
            }
        },
        get: function () {
            return sessionStorage.getItem('montage-wordpress-access_token');
        }
    },

    clientId: {
        value: ""
    },

    secret: {
        value: ""
    },

    /*
     * WordPress site url
     */
    host: {
        value: null
    },

    path: {
        value: '/wp-json/wp/v2/'
    },

    _getURLParameter: {
        value: function (paramName) {
            return decodeURIComponent((new RegExp('[?|&]' + paramName + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
        }
    },

    /*
     * Initital
     *
     * @function
     */
    init: {
        value: function () {
            var self = this;
            var code = this._getURLParameter("code");
            var url = "http://" + this.host + "/oauth/token";
            if (this.token) {
                verifyToken();
                return;
            }
            if (code) {
                this._issss = true;
                var headers = {
                    "Authorization": 'Basic ' + btoa(this.clientId + ':' + this.secret)
                }
                var args = "grant_type=authorization_code&code=" + code + '&redirect_uri=' + window.location.origin + window.location.pathname;
                this._makeRequest(url, "post", "data", args, headers, true).then(function (result) {
                    self.token = result.access_token;
                    verifyToken();
                }, function (error) {
                    self.token = null;
                    if (self.delegate) {
                        self.delegate['handleWordPressInitError'](error);
                    }
                });
            } else {
                if (self.delegate) {
                    self.delegate['handleWordPressInitError']({
                        error: "invalid_code",
                        error_description: "No authorizaion code defined."
                    });
                }
            }

            function verifyToken() {
                var user = self.getCurrentUser();
                user.then(function (result) {
                    if (self.delegate) {
                        self.delegate['handleWordPressInitComplete'](result);
                    }
                }, function (error) {
                    self.token = false;
                    if (self.delegate) {
                        self.delegate['handleWordPressInitError'](error);
                    }
                })
            }
        }
    },

    /*
     * Get WordPress site basic info.
     */
    querySiteInfo: {
        value: function () {
            var url = "http://" + this.host + "/wp-json";
            return this._makeRequest(url)
        }
    },

    /*
     * Get WordPress site Posts
     *
     * @function
     * @param {String} categoryFilter
     */
    queryPosts: {
        value: function (categoryFilter) {
            var url = "http://" + this.host + this.path  + "posts";
            if (categoryFilter) {
                url += "?" + "filter[category_name]=" + categoryFilter;
            }
            return this._makeRequest(url);
        }
    },

    /*
     * Get WordPress category list
     *
     * @function
     */
    queryCategory: {
        value: function () {
            var url = "http://" + this.host + this.path  + "taxonomies/category/terms";
            return this._makeRequest(url)
        }
    },

    createUser: {
        value: function (userName, password, name, email) {
            if (this.token) {
                var url = "http://" + this.host + this.path  + "users";
                var args = {username: userName, name: name, password: password, email: email};
                return this._makeRequest(url, 'post', 'json', args);
            } else {
                return false;
            }
        }
    },

    getCurrentUser: {
        value: function (userName, password, name) {
            if (this.token) {
                var url = "http://" + this.host + "/oauth/me";
                return this._makeRequest(url, 'get');
            } else {
                return false;
            }
        }
    },

    doAuthorization: {
        value: function () {
            var url = "http://" + this.host + "/oauth/authorize?response_type=code&client_id=" + this.clientId + "&redirect_uri=" + window.location.origin + window.location.pathname;
            window.open(url, "_self")
        }
    },

    /*
     * Make REST API cal to wordPress site. return a promise
     *
     * @private
     * @function
     */
    _makeRequest: {
        value: function (url, method, type, args, headers, withCredentials) {
            var deferred = Promise.defer();
            if (!this.host) {
                return;
            }
            if (!method) {
                method = 'get'
            }
            if (!type) {
                type = 'jsonp'
            }
            if (this.token) {
                if (url.indexOf('?') >= 0) {
                    url = url + '&access_token=' + this.token;
                } else {
                    url = url + '?access_token=' + this.token;
                }
            }
            var request = new XMLHttpRequest();
            request.open(method, url, true);
            request.onload = onLoad;
            request.onerror = onError;
            request.onprogress = onProgress;
            request.onreadystatechange = onState;
            if (withCredentials) {
                request.withCredentials = withCredentials;
            }
            if (headers) {
                for (var key in headers) {
                    request.setRequestHeader(key, headers[key]);
                }
            }
            try {
                if (type === 'json') {
                    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
                    if (args) {
                        request.send(JSON.stringify(args));
                    } else {
                        request.send();
                    }
                } else if (type = 'data') {
                    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
                    request.send(args);
                } else {
                    request.send(args);
                }
            } catch (e) {

            }

            function onLoad() {
                if (request.status === 200) {
                    deferred.resolve(JSON.parse(request.responseText));
                } else {
                    var error = JSON.parse(request.responseText)
                    deferred.reject(JSON.parse(request.responseText));
                }
            }

            function onError() {
                var error = JSON.parse(request.responseText)
                deferred.reject(JSON.parse(request.responseText));
            }

            function onProgress(event) {
                if (deferred.notify) {
                    deferred.notify(event.loaded / event.total);   
                }
            }

            function onState(event) {
                if (request.readyState === 4) {   //if complete
                    if (request.status === 403) {
                        deferred.reject(JSON.parse(request.responseText));
                    }
                }
            }

            return deferred.promise;
        }
    }
}, /** @lends WordpressConnector. */ {

    blueprintModuleId: require("montage")._blueprintModuleIdDescriptor,

    blueprint: require("montage")._blueprintDescriptor

});
