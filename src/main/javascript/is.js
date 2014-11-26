ot.is = function(it) {
    'use strict';

    function aArray() {
        return nameEquals('[object Array]');
    }

    function aFunction() {
        return nameEquals('[object Function]');
    }

    function aBoolean() {
        return nameEquals('[object Boolean]');
    }

    function aObject() {
        return nameEquals('[object Object]');
    }

    function aNull() {
        return it === undefined || it === null;
    }

    function aNumber() {
        return nameEquals('[object Number]');
    }

    function aString() {
        return nameEquals('[object String]');
    }

    function notBlank() {
        return aString() && it.replace(/^\s+|\s+$/g, '').length > 0;
    }

    function notNull() {
        return !aNull();
    }

    function nameEquals(string) {
        return Object.prototype.toString.call(it) === string;
    }

    return {
        aArray: aArray,
        aFunction: aFunction,
        aNumber: aNumber,
        aNull: aNull,
        aBoolean: aBoolean,
        aObject: aObject,
        aString: aString,
        notBlank: notBlank,
        notNull: notNull
    };
};