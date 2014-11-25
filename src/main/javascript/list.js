ot.list = function(it) {
    'use strict';
    ot.assertion(it).check(ot.is(it).array(), 'Argument have to be an array');

    function random() {
        ot.assertion(it).check(it.length > 0,
            'Array have to contain at least one element');
        return it[ot.range(0, it.length).random()];
    }

    function describe() {
        return ot.label('list').print({
            elements: it
        });
    }

    function empty() {
        return it.length === 0;
    }

    return {
        empty: empty,
        describe: describe,
        random: random
    };
};