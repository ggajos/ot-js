ot.method = function(jsFunction) {
    'use strict';
    ot.validate(jsFunction).isFunction();

    function noReturnStatement() {
        return jsFunction.toString().indexOf('return') < 0;
    }

    function isThrowingException() {
        try {
            jsFunction();
        } catch(err) {
            ot.log().debug('Method thrown exception', err);
            return true;
        }
        return false;
    }

    return {
        noReturnStatement: noReturnStatement,
        isThrowingException: isThrowingException
    };
};