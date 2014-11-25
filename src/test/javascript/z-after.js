tests.forEach(function (testGroup) {
    describe(['ot', testGroup.name].join('.'), function () {
        testGroup.tests.forEach(function (testCase) {
            var expr = 1;
            if(testCase.test) {
            }
            if(testCase.run != undefined) {
                if (testGroup.before) {
                    testGroup.before();
                }
                ot.log().debug("Executing " + testCase.name());
                var result = testCase.run();
                it(testCase.name(), function() {
                    expect(true).toBe(result.success)
                })
                if(!result) {
                    ot.logLevel.withLevel(0, function() {
                        var result = testCase.run();
                    });
                }
            }
        });
    });
});