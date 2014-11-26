ot.method = function(f) {
    'use strict';
    ot.validate().that(ot.is(f).aFunction(), "You have to provide a function");

    function noReturnStatement() {
        return f.toString().indexOf('return') < 0;
    }

    function isThrowingException() {
        try {
            f();
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