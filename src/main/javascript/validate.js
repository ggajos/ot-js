ot.validate = function (it) {
    'use strict';

    function that(condition, failureMessage) {
        if (!condition) {
            throw new Error([failureMessage, ', provided: ', it].join(' '));
        }
    }

    return {
        that: that
    };
};