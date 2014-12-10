ot.testResult = function(name, success) {
    'use strict';

    function isSuccess() {
        return success;
    }

    function label() {
        return name;
    }

    return {
        label: label,
        isSuccess: isSuccess
    };
};