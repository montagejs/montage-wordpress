/**
 * @module ui/header.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Header
 * @extends Component
 */
exports.Header = Component.specialize(/** @lends Header# */ {
    constructor: {
        value: function Header() {
            this.super();
        }
    },
    
    handleCloseButtonAction: {
        value: function() {
            this.dispatchEventNamed("hidePost", true, true);
        }
    }
});
