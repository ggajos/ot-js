var ot = ot || {};
ot.range = function(a, b) {
    'use strict';
    if(isNaN(a) || isNaN(b) || a === null || b === null) {
        throw Error('a should not be null');
    }
    var min = a <= b ? a : b;
    var max = a <= b ? b : a;

    function distance() {
        return max - min;
    }

    function random() {
        return Math.floor(min + Math.floor(Math.random() * (distance())));
    }

    /**
     @return {string}
     */
    function describe() {
        return ot.string.builder('range', {
            min: min,
            max: max
        }).build();
    }

    return {
        random: random,
        describe: describe
    };
};