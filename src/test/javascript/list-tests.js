(function() {
    'use strict';
    var ifRandomReturnsZero = function () {
        Math.random = function () {
            return 0;
        };
    };
    tests.push({
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
            }).throws(),
            ot.test(function () {
                return ot.list(null);
            }).throws(),
            ot.test(function () {
                return ot.list();
            }).throws(),
            ot.test(function () {
                return ot.list([7, 5, 97]).describe();
            }).equals('list { elements: 7,5,97 }'),
            ot.test(function () {
                return ot.list([]).empty();
            }).equals(true),
            ot.test(function () {
                return ot.list([1]).empty();
            }).equals(false)
        ]
    });
}());