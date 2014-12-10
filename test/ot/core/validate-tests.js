(function () {
    'use strict';
    tests.add(ot.testModule('core').addSuite(ot.testSuite({
        name: 'validate',
        module: 'core',
        tests: [
            ot.test(function () {
                return ot.validate().isArray();
            }).exception(),
            ot.test(function () {
                return ot.validate([]).isArray();
            }).ok(),

            ot.test(function () {
                return ot.validate().isBoolean();
            }).exception(),
            ot.test(function () {
                return ot.validate(true).isBoolean();
            }).ok(),

            ot.test(function () {
                return ot.validate().isFalse();
            }).exception(),
            ot.test(function () {
                return ot.validate(false).isFalse();
            }).ok(),

            ot.test(function () {
                return ot.validate().isFunction();
            }).exception(),
            ot.test(function () {
                return ot.validate(function () {
                }).isFunction();
            }).ok(),

            ot.test(function () {
                return ot.validate().isNotEmptyArray();
            }).exception(),
            ot.test(function () {
                return ot.validate([]).isNotEmptyArray();
            }).exception(),
            ot.test(function () {
                return ot.validate([1]).isNotEmptyArray();
            }).ok(),

            ot.test(function () {
                return ot.validate().isTrue();
            }).exception(),
            ot.test(function () {
                return ot.validate(true).isTrue();
            }).ok(),

            ot.test(function () {
                return ot.validate().notBlank();
            }).exception(),
            ot.test(function () {
                return ot.validate(' ').notBlank();
            }).exception(),
            ot.test(function () {
                return ot.validate('a').notBlank();
            }).ok(),

            ot.test(function () {
                return ot.validate().notNull();
            }).exception(),
            ot.test(function () {
                return ot.validate(null).notNull();
            }).exception(),
            ot.test(function () {
                return ot.validate(undefined).notNull();
            }).exception(),
            ot.test(function () {
                return ot.validate('').notNull();
            }).ok(),
            ot.test(function () {
                return ot.validate([]).notNull();
            }).ok(),
        ]
    })));
}());