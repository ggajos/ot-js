ot.validate = function (it) {
    'use strict';

    function isTrue(failureMessage) {
        if (!it) {
            throw new Error(failureMessage);
        }
    }

    return {
        isTrue: isTrue
    };
};