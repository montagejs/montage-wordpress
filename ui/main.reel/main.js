/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();

            var hostname = this.getParameterByName('hostname');
            if (hostname) {
                this.hostname = hostname;
            }
        }
    },

    hostname: {
        value: 'demo.wp-api.org'
    },

    posts: {
        value: null
    },

    enterDocument: {
        value: function (firstTime) {

            var self = this;
            if (firstTime) {
                this.templateObjects.wordpressConnector.queryPosts('featured').then(function (result) {
                    self.posts = result.map(function (post) {
                        post.better_featured_image = post.better_featured_image || post.featured_image;
                        post.better_featured_image.source_url = post.better_featured_image.source || post.better_featured_image.source_url || '../../assets/images/default.jpg';
                        return post;
                    });
                })
            }
        }
    },


    getParameterByName: {
            value: function (name, url) {
            if (!url) {
                url = window.location.href;
            }

            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) {
                return null;
            } else if (!results[2]) {
                return '';
            } else {
                return decodeURIComponent(results[2].replace(/\+/g, " "));   
            }
        }
    },

});
