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

    function describe() {
        return ot.label('range').print({
            min: min,
            max: max
        });
    }

    return {
        random: random,
        describe: describe
    };
};