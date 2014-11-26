ot.validate = function (it) {
    'use strict';

    function that(assertion, message) {
        if (!assertion) {
            throw new Error([message, ', provided: ', it].join(' '));
        }
    }

    return {
        that: that
    };
};