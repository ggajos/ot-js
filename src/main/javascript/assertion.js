ot.assertion = function (it) {
    'use strict';

    function array() {
        return check(ot.is(it).array(), 'Argument have to be an array');
    }

    function notEmptyArray() {
        return check(ot.is(it).array() && it.length > 0,
            'Array have to contain at least one element'
        );
    }

    function notNull() {
        return check(ot.is(it).notNull(), 'Argument have to be provided');
    }

    function check(assertion, message) {
        if (!assertion) {
            throw new Error(['[', it, '] - ', message].join(' '));
        }
    }

    return {
        array: array,
        notEmptyArray: notEmptyArray,
        notNull: notNull,
        check: check
    };
};