(function() {
    'use strict';
    ot.logLevel.withNoLog(function() {
        tests.forEach(function (testGroup) {
            QUnit.module(['ot', testGroup.name].join('.'));
            testGroup.tests.forEach(function (testCase) {
                if (testCase.run !== undefined) {
                    if (testGroup.before) {
                        testGroup.before();
                    }
                    ot.log().debug('Executing ' + testCase.name());
                    var result = testCase.run();
                    QUnit.test(testCase.name(), function (assert) {
                        assert.ok(true === result.isSuccess(), testCase.name());
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
}());