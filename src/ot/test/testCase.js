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

    function details() {
        return testName + assertion().label();
    }

    function run() {
        return assertion();
    }

    return {
        details: details,
        name: name,
        run: run
    };
};