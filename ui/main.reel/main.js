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
        }
    },

    posts: {
        value: null
    },

    enterDocument: {
        value: function (firstTime) {
            var self = this;
            if (firstTime) {
                this.templateObjects.wordpressConnector.queryPosts('featured').then(function (result) {
                    self.posts = result;
                })
            }
        }
    }

});
