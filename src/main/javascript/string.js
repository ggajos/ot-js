ot.string = function(it) {
    'use strict';

    function describe() {
        if(it === null) return '<null>';
        if(it === undefined) return '<undefined>';
        if(ot.is(it).aArray()) return ot.list(it).describe();
        return it.toString();
    }

    return {
        describe: describe
    };
};