ot.range = function(a, b) {
    'use strict';
    ot.validate().that(!ot.is(a).aNull(), 'Range start cannot be null');
    ot.validate().that(!ot.is(b).aNull(), 'Range end cannot be null');
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