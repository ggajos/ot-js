ot.label = function(name) {
    'use strict';
    ot.validate(!ot.string(name).isBlank()).isTrue('Label name cannot be blank');

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