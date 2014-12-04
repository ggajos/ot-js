(function () {
    'use strict';
    tests.push({
        name: 'cookie',
        tests: [
            ot.test(function () {
                ot.cookie('coo').write('value');
                return ot.cookie('coo').read();
            }).equals('value'),
            ot.test(function () {
                ot.cookie('coo').write('value');
                ot.cookie('coo').remove();
                return ot.cookie('coo').read();
            }).equals(''),
            ot.test(function () {
                ot.cookie('coo').write('value');
                return ot.cookie('coo').exists();
            }).equals(true),
            ot.test(function () {
                ot.cookie('coo').remove();
                return ot.cookie('coo').exists();
            }).equals(false),
            ot.test(function () {
                return ot.cookie();
            }).exception(),
            ot.test(function () {
                return ot.cookie('');
            }).exception()
        ]
    });
}());