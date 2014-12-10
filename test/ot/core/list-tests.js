(function () {
    'use strict';
    var ifRandomReturnsZero = function () {
        Math.random = function () {
            return 0;
        };
    };
    ot.testModule('core').addSuite(ot.testSuite({
        name: 'list',
        tests: [
            ot.test(function () {
                ifRandomReturnsZero();
                return ot.list([7, 5, 97]).random();
            }).equals(7),
            ot.test(function () {
                ifRandomReturnsZero();
                return ot.list(['a', 'b']).random();
            }).equals('a'),
            ot.test(function () {
                ifRandomReturnsZero();
                return ot.list([]).random();
            }).exception(),

            ot.test(function () {
                return ot.list(null);
            }).exception(),
            ot.test(function () {
                return ot.list();
            }).exception(),

            ot.test(function () {
                return ot.list([7, 5, 97]).describe();
            }).equals('list { elements: 7,5,97 }'),

            ot.test(function () {
                return ot.list([1, 2, 7]).find(function (it) {
                    return it > 5;
                });
            }).equals(7),
            ot.test(function () {
                return ot.list([1, 2, 7]).find(function (it) {
                    return it === 2;
                });
            }).equals(2),
            ot.test(function () {
                return ot.list([1, 2, 7]).find(function (it) {
                    return it > 10;
                });
            }).equals(null),
            ot.test(function () {
                return ot.list([]).find(function (it) {
                    return it > 10;
                });
            }).equals(null),

            ot.test(function () {
                return ot.list([]).empty();
            }).equals(true),
            ot.test(function () {
                return ot.list([1]).empty();
            }).equals(false)
        ]
    }));
}());