ot.string = function (it) {
    'use strict';

    function isBlank() {
        return trim().value() === '';
    }

    function trim() {
        return ot.string(value().replace(/^\s+|\s+$/g, ''));
    }

    function wrap(wrapper) {
        return ot.string([wrapper, value(), wrapper].join(''));
    }

    function describe() {
        var is = ot.is(it);
        if(is.aNull() || is.aBoolean() || is.aArray()) {
            return '<' + it + '>';
        }
        if (it === '') {
            return '<empty string>';
        }
        if (isBlank()) {
            return '<blank string>';
        }
        if (ot.is(it).aString()) {
            return ot.string(it).wrap('"').value();
        }
        return it.toString();
    }

    function contains(part) {
        return value().indexOf(part) >= 0;
    }

    function startsWith(part) {
        return value().indexOf(part) === 0;
    }

    function substringAfter(part) {
        var v = value();
        var index = v.indexOf(part);
        if(index >= 0) {
            v = v.substring(index + part.length, v.length);
        }
        return ot.string(v);
    }

    function value() {
        if (it === undefined || it === null) {
            return '';
        } else {
            return '' + it;
        }
    }

    return {
        isBlank: isBlank,
        trim: trim,
        wrap: wrap,
        describe: describe,
        contains: contains,
        startsWith: startsWith,
        substringAfter: substringAfter,
        value: value
    };
};