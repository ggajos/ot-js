ot.list = function(jsArray) {
    'use strict';
    ot.validate(ot.is(jsArray).aArray()).isTrue('Argument have to be an array');

    function random() {
        ot.validate(jsArray.length > 0).isTrue('Array have to contain at least one element');
        return jsArray[ot.range(0, jsArray.length).random()];
    }

    function describe() {
        return ot.label('list').print({
            elements: jsArray
        });
    }

    function empty() {
        return jsArray.length === 0;
    }

    return {
        empty: empty,
        describe: describe,
        random: random
    };
};