ot.testSuite = function(args) {
    'use strict';
    ot.validate(args.name).notBlank();
    ot.validate(args.tests).isNotEmptyArray();

    var suiteName = args.name;
    var tests = args.tests;
    var before = args.before || function() {};

    function name() {
        return suiteName;
    }

    function runQunit(assert) {
        tests.forEach(function (testCase) {
            if (testCase.run !== undefined) {
                before();
                ot.log().debug('Executing ' + testCase.name());
                var result = testCase.run();
                assert.ok(
                    true === result.isSuccess(),
                    testCase.details()
                );
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
    }

    return {
        name: name,
        runQunit: runQunit
    };
};