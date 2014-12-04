(function () {
    'use strict';
    tests.push({
        name: 'method',
        module: 'core',
        tests: [
            ot.test(function () {
                return ot.method(function () {
                    throw Error();
                }).isThrowingException();
            }).equals(true),
            ot.test(function () {
                return ot.method(function () {
                }).isThrowingException();
            }).equals(false),
            ot.test(function () {
                return ot.method('');
            }).exception(),
            ot.test(function () {
                return ot.method();
            }).exception(),
            ot.test(function () {
                return ot.method(function () {
                    return 1;
                }).noReturnStatement();
            }).equals(false),
            ot.test(function () {
                return ot.method(function () {
                    'nothing here';
                }).noReturnStatement();
            }).equals(true)
        ]
    });
}());