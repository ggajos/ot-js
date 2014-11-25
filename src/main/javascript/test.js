ot.test = function(expression) {

    function ok() {
        return ot.testCase(expression, function() {
            return ot.testResult(
                "silent execution",
                !ot.method(expression).isThrowingException()
            );
        })
    }

    function equals(value) {
        if(ot.method(expression).noReturnStatement()) {
            ot.log().error("No return statement in " + describe());
        }
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

    function describe() {
        return ot.label("test").print({
            expression: expression.toString()
        });
    }

    return {
        ok: ok,
        equals: equals,
        throws: throws
    }
};
ot.testCase = function(expression, assertion) {
    var testName = expression.toString()
        .replace(/function \(\)/g, '')
        .replace(/function\(\)/g, '')
        .replace(/return/, '')
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