tests.forEach(function (testGroup) {
    describe(['ot', testGroup.name].join('.'), function () {
        testGroup.tests.forEach(function (testCase) {
            var expr = testCase.test.toString()
                .replace(/function \(\)/g, '')
                .replace(/function\(\)/g, '')
                .replace(/return/g, '')
                .replace(/;/g, '');
            if (testCase.equal) {
                it([expr, testCase.equal].join(' == '), function () {
                    if (testGroup.before) {
                        testGroup.before();
                    }
                    if (testCase.equal) {
                        expect(testCase.test()).toBe(testCase.equal);
                    }
                });
            }
            if (testCase.exception) {
                it([expr, 'throws exception'].join(' '), function () {
                    if (testGroup.before) {
                        testGroup.before();
                    }
                    if (testCase.exception) {
                        try {
                            ot.behaviour(testCase.test()).call();
                            expect(true).toBe(false);
                        } catch (err) {
                            expect(true).toBe(true);
                        }
                    }
                });
            }
        });
    });
});