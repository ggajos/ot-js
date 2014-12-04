(function() {
    'use strict';
    tests.push({
        name: 'log',
        module: 'core',
        tests: [
            ot.test(function () {
                ot.log().debug('debug level');
            }).ok(),
            ot.test(function () {
                ot.logLevel.withNoLog(function() {
                    ot.log().warning('warning level');
                });
            }).ok(),
            ot.test(function () {
                ot.logLevel.withNoLog(function() {
                    ot.log().error('error level');
                });
            }).ok()
        ]
    });
}());