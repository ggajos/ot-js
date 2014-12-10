ot.testSuite = function(args) {
    'use strict';
    ot.validate(args.name).notBlank();
    ot.validate(args.tests).isNotEmptyArray();

    var suiteName = args.name;
    var tests = args.tests;
    var before = args.before || function() {};
    var description = args.description || 'Utility class';

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

    function readme() {
        var s = ot.string('#### ot.' + suiteName)
            .append(' - ' + description)
            .append('\n');
        tests.forEach(function (testCase) {
            var line = testCase.name()
                .replace(/^\s*|\s(?=\s)|\s*$/g, '')
                .replace(/returns/g, ' // ');
            s = s.append('    ')
                .append(line)
                .append('\n');
        });
        return s.append('\n');
    }

    return {
        name: name,
        runQunit: runQunit,
        readme: readme
    };
};