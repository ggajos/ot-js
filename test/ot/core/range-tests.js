(function() {
    'use strict';
    var ifRandomReturnsZero = function () {
        Math.random = function () {
            return 0;
        };
    };
    var ifRandomReturnsOne = function () {
        Math.random = function () {
            return 1;
        };
    };
    tests.add(ot.testModule('core').addSuite(ot.testSuite({
        name: 'range',
        before: function () {
            Math.random = function () {
                return 0;
            };
        },
        tests: [
            ot.test(function () {
                ifRandomReturnsZero();
                return ot.range(-3, 7).random();
            }).equals(-3),
            ot.test(function () {
                ifRandomReturnsZero();
                return ot.range(0, 1).random();
            }).equals(0),
            ot.test(function () {
                ifRandomReturnsZero();
                return ot.range(1, 1).random();
            }).equals(1),
            ot.test(function () {
                ifRandomReturnsOne();
                return ot.range(-3, 7).random();
            }).equals(7),
            ot.test(function () {
                ifRandomReturnsOne();
                return ot.range(0, 1).random();
            }).equals(1),
            ot.test(function () {
                return ot.range(null, 1);
            }).exception(),
            ot.test(function () {
                return ot.range(1, null);
            }).exception(),
            ot.test(function () {
                return ot.range('a', null);
            }).exception(),
            ot.test(function () {
                return ot.range('a');
            }).exception(),
            ot.test(function () {
                return ot.range();
            }).exception(),
            ot.test(function () {
                return ot.range(3, 7).describe();
            }).equals('range { min: 3, max: 7 }')
        ]
    })));
}());