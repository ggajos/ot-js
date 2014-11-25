ot.list = function(it) {
    'use strict';
    ot.assertion(it).array();

    function random() {
        ot.assertion(it).notEmptyArray();
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