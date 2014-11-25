(function() {
    'use strict';
    tests.push({
        name: 'log',
        tests: [
            ot.test(function () {
                ot.log().debug('debug level');
            }).ok(),
            ot.test(function () {
                ot.log().warning('warning level');
            }).ok(),
            ot.test(function () {
                ot.log().error('error level');
            }).ok()
        ]
    });
}());