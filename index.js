/* global define: true */
(function (root, factory) {
    'use strict';
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals
        root.decl = factory();
    }
})
(this, function () {
    'use strict';

    var registry = {};

    function toArray(iterable) {
        return Array.prototype.slice.call(iterable);
    }

    /**
     * Declares constructor
     *
     * @param {String}   selector
     * @param {Function} Constructor
     * @returns {Function}
     */
    function decl(selector, Constructor) {
        return registry[selector] = Constructor;
    }

    /**
     * Applies constructors
     *
     * @param {HTMLElement} [root=document]
     */
    decl.apply = function (root) {
        root = root || document;

        Object.keys(registry).forEach(function (selector) {
            var Constructor = registry[selector];
            toArray(root.querySelectorAll(selector)).forEach(function (element) {
                new Constructor(element);
            });
        });
    };

    /**
     * Removes constructor
     *
     * @param {String}   selector
     * @returns {Boolean}
     */
    decl.remove = function (selector) {
        return delete registry[selector];
    };

    return decl;
});