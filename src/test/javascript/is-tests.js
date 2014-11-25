(function() {
    'use strict';
    tests.push({
        name: 'is',
        tests: [
            ot.test(function () {
                return ot.is([1, 2, 3]).array();
            }).equals(true),
            ot.test(function () {
                return ot.is('').array();
            }).equals(false),
            ot.test(function () {
                return ot.is(undefined).array();
            }).equals(false),
            ot.test(function () {
                return ot.is(function() {}).aFunction();
            }).equals(true),
            ot.test(function () {
                return ot.is('').aFunction();
            }).equals(false),
            ot.test(function () {
                return ot.is(undefined).aFunction();
            }).equals(false),
            ot.test(function () {
                return ot.is('').notNull();
            }).equals(true),
            ot.test(function () {
                return ot.is(null).notNull();
            }).equals(false),
            ot.test(function () {
                return ot.is(undefined).notNull();
            }).equals(false)
        ]
    });
}());