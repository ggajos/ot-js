(function() {
    'use strict';
    ot.logLevel.withNoLog(function() {
        tests.forEach(function (testGroup) {
            describe(['ot', testGroup.name].join('.'), function () {
                testGroup.tests.forEach(function (testCase) {
                    if (testCase.run !== undefined) {
                        if (testGroup.before) {
                            testGroup.before();
                        }
                        ot.log().debug('Executing ' + testCase.name());
                        var result = testCase.run();
                        it(testCase.name(), function () {
                            expect(true).toBe(result.isSuccess());
                        });
                        if (!result.isSuccess()) {
                            ot.logLevel.withLogDebug(function () {
                                ot.log().debug([
                                    'executing test (',
                                    testCase.name(),
                                    ') with more verbose logging'
                                ].join());
                                ot.log().debug([
                                    'expected result:'
                                ].join());
                                testCase.run();
                            });
                        }
                    }
                });
            });
        });
    });
}());