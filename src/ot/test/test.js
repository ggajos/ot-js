ot.test = function(expression) {
    'use strict';

    function ok() {
        return ot.testCase(expression, function() {
            return ot.testResult(
                'silent execution',
                !ot.method(expression).isThrowingException()
            );
        });
    }

    function equals(value) {
        if(ot.method(expression).noReturnStatement()) {
            ot.log().error('No return statement in ' + describe());
        }
        return ot.testCase(expression, function() {
            var result = expression();
            var success = result === value;
            if(success) {
                return ot.testResult(
                    [' returns ', ot.string(result).describe()].join(''),
                    success
                );
            } else {
                return ot.testResult(
                    [
                        ' returns [', result,
                        '] but expected is [', value, ']'
                    ].join(''),
                    success
                );
            }
        });
    }

    function exception() {
        return ot.testCase(expression, function() {
            return ot.testResult(
                'will throw exception',
                ot.method(expression).isThrowingException()
            );
        });
    }

    return {
        ok: ok,
        equals: equals,
        exception: exception
    };
};