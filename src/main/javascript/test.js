ot.test = function(expression) {

    function equals(value) {
        return ot.testCase(expression, function() {
            var result = expression();
            return ot.testResult(
                " == " + result,
                result == value
            )
        })
    }

    function throws() {
        return ot.testCase(expression, function() {
            return ot.testResult(
                "should throw exception",
                ot.method(expression).isThrowingException()
            );
        })
    }

    return {
        equals: equals,
        throws: throws
    }
};
ot.testCase = function(expression, assertion) {
    var testName = expression.toString()
        .replace(/function \(\)/g, '')
        .replace(/function\(\)/g, '')
        .replace(/return/g, '')
        .replace(/}/g, '')
        .replace(/{/g, '');

    function name() {
        return testName + assertion().name
    }

    function run() {
        return assertion();
    }

    return {
        name: name,
        run: run
    }
};
ot.testResult = function(name, success) {
    return {
        name: name,
        success: success
    }
}