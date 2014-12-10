(function() {
    'use strict';
    ot.testModule('core').addSuite(ot.testSuite({
        name: 'log',
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
    }));
}());