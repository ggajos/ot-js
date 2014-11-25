ot.label = function(name) {
    'use strict';
    ot.assertion(name).notNull();

    function print(properties) {
        var array = [];
        for (var key in properties) {
            if (properties.hasOwnProperty(key)) {
                array.push([key, properties[key]].join(': '));
            }
        }
        return [name, '{', array.join(', '), '}'].join(' ');
    }

    return {
        print: print
    };
};