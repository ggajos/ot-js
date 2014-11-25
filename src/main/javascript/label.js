ot.string = {};
ot.label = function(name) {
    'use strict';

    function print(properties) {
        if(name === null) {
            throw new Error();
        }
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