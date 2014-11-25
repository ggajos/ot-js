(function() {
    'use strict';
    tests.push({
        name: 'assertion',
        tests: [
            ot.test(function () {
                return ot.assertion([1, 2, 3]).array();
            }).ok(),
            ot.test(function () {
                return ot.assertion([]).array();
            }).ok(),
            ot.test(function () {
                return ot.assertion('').array();
            }).throws(),
            ot.test(function () {
                return ot.assertion(null).array();
            }).throws(),
            ot.test(function () {
                return ot.assertion([1]).notEmptyArray();
            }).ok(),
            ot.test(function () {
                return ot.assertion([]).notEmptyArray();
            }).throws(),
            ot.test(function () {
                return ot.assertion('').notEmptyArray();
            }).throws(),
            ot.test(function () {
                return ot.assertion('').notNull();
            }).ok(),
            ot.test(function () {
                return ot.assertion(null).notNull();
            }).throws()
        ]
    });
}());