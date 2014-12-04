ot.validate = function (it) {
    'use strict';

    function isArray() {
        throwError(!ot.is(it).aArray(), 'not an array');
    }

    function isBoolean() {
        throwError(!ot.is(it).aBoolean(), 'not a boolean');
    }

    function isFalse() {
        isBoolean();
        throwError(it === true, 'true');
    }

    function isFunction() {
        throwError(!ot.is(it).aFunction(), 'not a function');
    }

    function isNotEmptyArray() {
        isArray();
        throwError(it.length === 0, 'empty array');
    }

    function isTrue() {
        isBoolean();
        throwError(it === false, 'false');
    }

    function notBlank() {
        throwError(ot.string(it).isBlank(), 'blank');
    }

    function notNull() {
        throwError(ot.is(it).aNull(), 'null or undefined');
    }

    function throwError(condition, message) {
        if(condition) {
            throw new Error([
                'The validated expression [',
                ot.string(it).describe() ,
                '] is ',
                message,
                '.'
            ].join(''));
        }
    }

    return {
        isArray: isArray,
        isBoolean: isBoolean,
        isFalse: isFalse,
        isFunction: isFunction,
        isNotEmptyArray: isNotEmptyArray,
        isTrue: isTrue,
        notBlank: notBlank,
        notNull: notNull
    };
};