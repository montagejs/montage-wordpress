montageDefine("59e90da","core/wordpress-connector",{dependencies:["montage/core/core","montage/core/promise","montage","montage"],factory:function(e,t,o){var n=e("montage/core/core").Montage,r=e("montage/core/promise").Promise;t.WordpressConnector=n.specialize({constructor:{value:function(){}},delegate:{value:null},token:{set:function(e){e?sessionStorage.setItem("montage-wordpress-access_token",e):sessionStorage.removeItem("montage-wordpress-access_token")},get:function(){return sessionStorage.getItem("montage-wordpress-access_token")}},clientId:{value:""},secret:{value:""},host:{value:null},path:{value:"/wp-json/wp/v2/"},_getURLParameter:{value:function(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}},init:{value:function(){function e(){var e=t.getCurrentUser();e.then(function(e){t.delegate&&t.delegate.handleWordPressInitComplete(e)},function(e){t.token=!1,t.delegate&&t.delegate.handleWordPressInitError(e)})}var t=this,o=this._getURLParameter("code"),n="http://"+this.host+"/oauth/token";if(this.token)return void e();if(o){this._issss=!0;var r={Authorization:"Basic "+btoa(this.clientId+":"+this.secret)},s="grant_type=authorization_code&code="+o+"&redirect_uri="+window.location.origin+window.location.pathname;this._makeRequest(n,"post","data",s,r,!0).then(function(o){t.token=o.access_token,e()},function(e){t.token=null,t.delegate&&t.delegate.handleWordPressInitError(e)})}else t.delegate&&t.delegate.handleWordPressInitError({error:"invalid_code",error_description:"No authorizaion code defined."})}},querySiteInfo:{value:function(){var e="http://"+this.host+"/wp-json";return this._makeRequest(e)}},queryPosts:{value:function(e){var t="http://"+this.host+this.path+"posts";return e&&(t+="?filter[category_name]="+e),this._makeRequest(t)}},queryCategory:{value:function(){var e="http://"+this.host+this.path+"taxonomies/category/terms";return this._makeRequest(e)}},createUser:{value:function(e,t,o,n){if(this.token){var r="http://"+this.host+this.path+"users",s={username:e,name:o,password:t,email:n};return this._makeRequest(r,"post","json",s)}return!1}},getCurrentUser:{value:function(e,t,o){if(this.token){var n="http://"+this.host+"/oauth/me";return this._makeRequest(n,"get")}return!1}},doAuthorization:{value:function(){var e="http://"+this.host+"/oauth/authorize?response_type=code&client_id="+this.clientId+"&redirect_uri="+window.location.origin+window.location.pathname;window.open(e,"_self")}},_makeRequest:{value:function(e,t,o,n,s,a){function i(){if(200===l.status)h.resolve(JSON.parse(l.responseText));else{JSON.parse(l.responseText);h.reject(JSON.parse(l.responseText))}}function c(){JSON.parse(l.responseText);h.reject(JSON.parse(l.responseText))}function u(e){h.notify&&h.notify(e.loaded/e.total)}function d(e){4===l.readyState&&403===l.status&&h.reject(JSON.parse(l.responseText))}var h=r.defer();if(this.host){t||(t="get"),o||(o="jsonp"),this.token&&(e=e.indexOf("?")>=0?e+"&access_token="+this.token:e+"?access_token="+this.token);var l=new XMLHttpRequest;if(l.open(t,e,!0),l.onload=i,l.onerror=c,l.onprogress=u,l.onreadystatechange=d,a&&(l.withCredentials=a),s)for(var p in s)l.setRequestHeader(p,s[p]);try{"json"===o?(l.setRequestHeader("Content-Type","application/json; charset=UTF-8"),n?l.send(JSON.stringify(n)):l.send()):(o="data")?(l.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),l.send(n)):l.send(n)}catch(g){}return h.promise}}}},{blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});