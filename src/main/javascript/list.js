var ot = ot || {};
ot.list = function(array) {
    'use strict';
    if(array === null || array === undefined) {
        throw Error('array argument cannot be null');
    }

    function random() {
        if(array.length === 0) {
            throw Error('Unable to get random element from list');
        }
        return array[ot.range(0, array.length).random()];
    }

    /**
     @return {string}
     */
    function describe() {
        return ot.string.builder('list', {
            elements: array
        }).build();
    }

    return {
        random: random,
        describe: describe
    };
};