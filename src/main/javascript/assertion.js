ot.assertion = function (it) {
    'use strict';

    function check(assertion, message) {
        if (!assertion) {
            throw new Error(['[', it, '] - ', message].join(' '));
        }
    }

    return {
        check: check
    };
};