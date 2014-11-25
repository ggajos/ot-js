ot.method = function(f) {
    'use strict';

    function noReturnStatement() {
        return f.toString().indexOf('return') < 0;
    }

    function isThrowingException() {
        try {
            f();
        } catch(err) {
            ot.log().debug("Method thrown exception", err);
            return true;
        }
        return false;
    }

    var getType = {};
    if(!(f && getType.toString.call(f) === '[object Function]')) {
        throw Error('f has to be function');
    }

    return {
        noReturnStatement: noReturnStatement,
        isThrowingException: isThrowingException
    };
};