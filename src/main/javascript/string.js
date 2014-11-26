ot.string = function (it) {
    'use strict';

    function blank() {
        return ot.is(it).aString() && it.replace(/^\s+|\s+$/g, '') === '';
    }

    function describe() {
        if (it === undefined) {
            return '<undefined>';
        }
        if(it === null) {
            return '<null>';
        }
        if (it === '') {
            return '<empty string>';
        }
        if(blank()) {
            return '<blank string>';
        }
        if (ot.is(it).aArray()) {
            return ot.list(it).describe();
        }
        return it.toString();
    }

    return {
        blank: blank,
        describe: describe
    };
};