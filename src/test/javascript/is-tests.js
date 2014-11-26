(function () {
    'use strict';
    tests.push({
        name: 'is',
        tests: [
            ot.test(function () {
                return ot.is([1, 2, 3]).aArray();
            }).equals(true),
            ot.test(function () {
                return ot.is('').aArray();
            }).equals(false),
            ot.test(function () {
                return ot.is(undefined).aArray();
            }).equals(false),

            ot.test(function () {
                return ot.is(function () {
                    'body';
                }).aFunction();
            }).equals(true),
            ot.test(function () {
                return ot.is('').aFunction();
            }).equals(false),
            ot.test(function () {
                return ot.is(undefined).aFunction();
            }).equals(false),

            ot.test(function () {
                return ot.is([1, 2, 3]).aString();
            }).equals(false),
            ot.test(function () {
                return ot.is('').aString();
            }).equals(true),
            ot.test(function () {
                return ot.is(null).aString();
            }).equals(false),

            ot.test(function () {
                return ot.is(undefined).aNull();
            }).equals(true),
            ot.test(function () {
                return ot.is(null).aNull();
            }).equals(true),
            ot.test(function () {
                return ot.is('').aNull();
            }).equals(false),


            ot.test(function () {
                return ot.is(1).aNumber();
            }).equals(true),
            ot.test(function () {
                return ot.is('').aNumber();
            }).equals(false),
            ot.test(function () {
                return ot.is(null).aNumber();
            }).equals(false),

            ot.test(function () {
                return ot.is(false).aBoolean();
            }).equals(true),
            ot.test(function () {
                return ot.is('').aBoolean();
            }).equals(false),
            ot.test(function () {
                return ot.is(null).aBoolean();
            }).equals(false),

            ot.test(function () {
                return ot.is({a: 'a'}).aObject();
            }).equals(true),
            ot.test(function () {
                return ot.is(function() {}).aObject();
            }).equals(false),
            ot.test(function () {
                return ot.is('').aObject();
            }).equals(false),
            ot.test(function () {
                return ot.is(null).aObject();
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