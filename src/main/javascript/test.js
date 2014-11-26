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
                    [' === ', ot.string(result).describe()].join(''),
                    success
                );
            } else {
                return ot.testResult(
                    [
                        ' === [', result,
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
                'should throw exception',
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
ot.testCase = function(expression, assertion) {
    'use strict';
    var testName = expression.toString()
        .replace(/function \(\)/g, '')
        .replace(/function\(\)/g, '')
        .replace(/return/, '')
        .replace(/}/g, '')
        .replace(/{/g, '');

    function name() {
        return testName + assertion().label();
    }

    function run() {
        return assertion();
    }

    return {
        name: name,
        run: run
    };
};
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