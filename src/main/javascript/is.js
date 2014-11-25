ot.is = function(it) {
    'use strict';

    function array() {
        return nameEquals('[object Array]');
    }

    function aFunction() {
        return nameEquals('[object Function]');
    }

    function boolean() {
        return nameEquals('[object Boolean]');
    }

    function object() {
        return nameEquals('[object Object]');
    }

    function number() {
        return nameEquals('[object Number]');
    }

    function string() {
        return nameEquals('[object String]');
    }

    function notBlank() {
        return string() && it.trim().length > 0;
    }

    function notNull() {
        return !(it === undefined || it === null);
    }

    function nameEquals(string) {
        return Object.prototype.toString.call(it) === string;
    }

    return {
        array: array,
        aFunction: aFunction,
        number: number,
        boolean: boolean,
        object: object,
        string: string,
        notBlank: notBlank,
        notNull: notNull
    };
};