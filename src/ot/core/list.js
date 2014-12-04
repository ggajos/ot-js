ot.list = function (jsArray) {
    'use strict';
    ot.validate(jsArray).isArray();

    function random() {
        ot.validate(jsArray).isNotEmptyArray();
        return jsArray[ot.range(0, jsArray.length).random()];
    }

    function find(f) {
        for (var i = 0; i < jsArray.length; i += 1) {
            var item = jsArray[i];
            if(f(item)) {
                return item;
            }
        }
        return null;
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
        find: find,
        random: random
    };
};