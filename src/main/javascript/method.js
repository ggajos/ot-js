ot.method = function(f) {

    function isThrowingException() {
        try {
            f();
        } catch(err) {
            return true;
        }
        return false;
    }

    return {
        isThrowingException: isThrowingException
    }
};