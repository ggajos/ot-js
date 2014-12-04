ot.is = function(object) {
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
        return object === undefined || object === null;
    }

    function aNumber() {
        return nameEquals('[object Number]');
    }

    function aString() {
        return nameEquals('[object String]');
    }

    function nameEquals(string) {
        return Object.prototype.toString.call(object) === string;
    }

    return {
        aArray: aArray,
        aFunction: aFunction,
        aNumber: aNumber,
        aNull: aNull,
        aBoolean: aBoolean,
        aObject: aObject,
        aString: aString
    };
};