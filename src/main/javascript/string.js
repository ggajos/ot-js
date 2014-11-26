ot.string = function (it) {
    'use strict';

    function blank() {
        return trim() === '';
    }

    function trim() {
        return value().replace(/^\s+|\s+$/g, '');
    }

    function describe() {
        var is = ot.is(it);
        if(is.aNull() || is.aBoolean() || is.aArray()) {
            return '<' + it + '>';
        }
        if (it === '') {
            return '<empty string>';
        }
        if (blank()) {
            return '<blank string>';
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