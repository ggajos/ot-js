ot.string = function (it) {
    'use strict';

    function blank() {
        return trim() === '';
    }

    function trim() {
        return value().replace(/^\s+|\s+$/g, '');
    }

    function describe() {
        if (it === undefined) {
            return '<undefined>';
        }
        if (it === null) {
            return '<null>';
        }
        if (it === '') {
            return '<empty string>';
        }
        if (blank()) {
            return '<blank string>';
        }
        if (it === true || it === false) {
            return ['<', it, '>'].join('');
        }
        if (ot.is(it).aArray()) {
            return '[' + it + ']';
        }
        if (ot.is(it).aString()) {
            return ['"', it.toString(), '"'].join('');
        }
        return it.toString();
    }

    function value() {
        if (it === undefined || it === null) {
            return '';
        } else {
            return '' + it;
        }
    }

    return {
        blank: blank,
        trim: trim,
        describe: describe,
        value: value
    };
};