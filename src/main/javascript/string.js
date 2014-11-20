var ot = ot || {};
ot.string = {};
ot.string.builder = function(name, properties) {
    'use strict';

    function build() {
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
        build: build
    };
};