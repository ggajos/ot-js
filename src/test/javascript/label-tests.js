(function() {
    'use strict';
    tests.push({
        name: 'label',
        tests: [
            ot.test(function () {
                return ot.label('name').print({
                    min: 10,
                    max: -40
                });
            }).equals('name { min: 10, max: -40 }'),
            ot.test(function () {
                return ot.label('name').print({});
            }).equals('name {  }'),
            ot.test(function () {
                return ot.label('name').print(null);
            }).equals('name {  }'),
            ot.test(function () {
                return ot.label(null).print(null);
            }).throws()
        ]
    });
}());