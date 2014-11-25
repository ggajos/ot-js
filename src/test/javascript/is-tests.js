(function () {
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
                return ot.is(function () {
                    "body"
                }).aFunction()
            }).equals(true),
            ot.test(function () {
                return ot.is('').aFunction();
            }).equals(false),
            ot.test(function () {
                return ot.is(undefined).aFunction();
            }).equals(false),

            ot.test(function () {
                return ot.is([1, 2, 3]).string();
            }).equals(false),
            ot.test(function () {
                return ot.is("").string();
            }).equals(true),
            ot.test(function () {
                return ot.is(null).string();
            }).equals(false),

            ot.test(function () {
                return ot.is(1).number();
            }).equals(true),
            ot.test(function () {
                return ot.is("").number();
            }).equals(false),
            ot.test(function () {
                return ot.is(null).number();
            }).equals(false),

            ot.test(function () {
                return ot.is(false).boolean();
            }).equals(true),
            ot.test(function () {
                return ot.is("").boolean();
            }).equals(false),
            ot.test(function () {
                return ot.is(null).boolean();
            }).equals(false),

            ot.test(function () {
                return ot.is({a: 'a'}).object();
            }).equals(true),
            ot.test(function () {
                return ot.is(function() {}).object();
            }).equals(false),
            ot.test(function () {
                return ot.is("").object();
            }).equals(false),
            ot.test(function () {
                return ot.is(null).object();
            }).equals(false),

            ot.test(function () {
                return ot.is('').notNull();
            }).equals(true),
            ot.test(function () {
                return ot.is(null).notNull();
            }).equals(false),
            ot.test(function () {
                return ot.is(undefined).notNull();
            }).equals(false),

            ot.test(function () {
                return ot.is('  a  ').notBlank();
            }).equals(true),
            ot.test(function () {
                return ot.is('a').notBlank();
            }).equals(true),
            ot.test(function () {
                return ot.is('').notBlank();
            }).equals(false),
            ot.test(function () {
                return ot.is(null).notBlank();
            }).equals(false)
        ]
    });
}());