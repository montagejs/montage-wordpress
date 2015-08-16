var Montage = require("montage").Montage;
var Component = require("montage/ui/component").Component;

exports.Html = Montage.create(Component, {

    hasTemplate: { value: false },

    constructor: {
        value: function Indent() {
            this.super();
            this.value = null;
            this.addOwnPropertyChangeListener("value", this);
        }
    },

    canDraw: {
        value: function () {
            return this.value !== null;
        }
    },

    handleValueChange: {
        value: function () {
            this.needsDraw = true;
        }
    },

    iteration: {
        value: null
    },

    value: {
        value: ''
    },

    object: {
        value: null
    },

    draw: {
        value: function () {
            this.element.innerHTML = this.value;
        }
    }

});
