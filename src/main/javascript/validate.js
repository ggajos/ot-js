ot.validate = function () {
    'use strict';

    function that(condition, failureMessage) {
        if (!condition) {
            throw new Error(failureMessage);
        }
    }

    return {
        that: that
    };
};