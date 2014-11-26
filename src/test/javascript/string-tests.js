(function () {
    'use strict';
    tests.push({
        name: 'string',
        tests: [
            ot.test(function () {
                return ot.string().describe();
            }).equals('<undefined>'),
            ot.test(function () {
                return ot.string(null).describe();
            }).equals('<null>'),
            ot.test(function () {
                return ot.string(undefined).describe();
            }).equals('<undefined>'),
            ot.test(function () {
                return ot.string(true).describe();
            }).equals('true'),
            ot.test(function () {
                return ot.string(false).describe();
            }).equals('false'),
            ot.test(function () {
                return ot.string(4).describe();
            }).equals('4'),
            ot.test(function () {
                return ot.string(4.5).describe();
            }).equals('4.5'),
            ot.test(function () {
                return ot.string([1, 2, 3]).describe();
            }).equals('list { elements: 1,2,3 }')
        ]
    });
}());