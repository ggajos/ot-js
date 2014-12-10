(function () {
    'use strict';
    ot.testModule('core').addSuite(ot.testSuite({
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
                return ot.string('').describe();
            }).equals('<empty string>'),
            ot.test(function () {
                return ot.string('     ').describe();
            }).equals('<blank string>'),
            ot.test(function () {
                return ot.string(true).describe();
            }).equals('<true>'),
            ot.test(function () {
                return ot.string(false).describe();
            }).equals('<false>'),
            ot.test(function () {
                return ot.string(4).describe();
            }).equals('4'),
            ot.test(function () {
                return ot.string(4.5).describe();
            }).equals('4.5'),
            ot.test(function () {
                return ot.string([1, 2, 3]).describe();
            }).equals('<1,2,3>'),
            ot.test(function () {
                return ot.string('text').describe();
            }).equals('"text"'),

            ot.test(function () {
                return ot.string().isBlank();
            }).equals(true),
            ot.test(function () {
                return ot.string(4.5).isBlank();
            }).equals(false),
            ot.test(function () {
                return ot.string(false).isBlank();
            }).equals(false),
            ot.test(function () {
                return ot.string('').isBlank();
            }).equals(true),
            ot.test(function () {
                return ot.string('   ').isBlank();
            }).equals(true),
            ot.test(function () {
                return ot.string('  a ').isBlank();
            }).equals(false),

            ot.test(function () {
                return ot.string().value();
            }).equals(''),
            ot.test(function () {
                return ot.string(null).value();
            }).equals(''),
            ot.test(function () {
                return ot.string(undefined).value();
            }).equals(''),
            ot.test(function () {
                return ot.string('').value();
            }).equals(''),
            ot.test(function () {
                return ot.string('     ').value();
            }).equals('     '),
            ot.test(function () {
                return ot.string(true).value();
            }).equals('true'),
            ot.test(function () {
                return ot.string(false).value();
            }).equals('false'),
            ot.test(function () {
                return ot.string(4).value();
            }).equals('4'),
            ot.test(function () {
                return ot.string(4.5).value();
            }).equals('4.5'),
            ot.test(function () {
                return ot.string([1, 2, 3]).value();
            }).equals('1,2,3'),

            ot.test(function () {
                return ot.string(' a ').trim().value();
            }).equals('a'),

            ot.test(function () {
                return ot.string('test').contains('a');
            }).equals(false),
            ot.test(function () {
                return ot.string('test').contains('t');
            }).equals(true),
            ot.test(function () {
                return ot.string().contains('t');
            }).equals(false),

            ot.test(function () {
                return ot.string('test').startsWith('a');
            }).equals(false),
            ot.test(function () {
                return ot.string('Xtest').startsWith('Xte');
            }).equals(true),
            ot.test(function () {
                return ot.string().startsWith('t');
            }).equals(false),

            ot.test(function () {
                return ot.string(null).substringAfter('abc').value();
            }).equals(''),
            ot.test(function () {
                return ot.string('').substringAfter('').value();
            }).equals(''),
            ot.test(function () {
                return ot.string('abcdef').substringAfter('abc').value();
            }).equals('def'),
            ot.test(function () {
                return ot.string('abcdef').substringAfter('f').value();
            }).equals(''),
            ot.test(function () {
                return ot.string('abcdef').substringAfter('a').value();
            }).equals('bcdef'),
            ot.test(function () {
                return ot.string('abcdef').substringAfter('X').value();
            }).equals('abcdef'),


            ot.test(function () {
                return ot.string('a').wrap('X').value();
            }).equals('XaX'),
            ot.test(function () {
                return ot.string('a').wrap().value();
            }).equals('a'),
        ]
    }));
}());