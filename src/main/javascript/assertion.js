ot.assertion = function (it) {
    'use strict';

    function check(assertion, message) {
        if (!assertion) {
            throw new Error([message, ', provided: ', it].join(' '));
        }
    }

    return {
        check: check
    };
};