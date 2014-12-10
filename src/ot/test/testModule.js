ot.testModule = function(name) {
    'use strict';
    var suits = [];

    function addSuite(suite) {
        suits.push(suite);
        return self;
    }

    function runQunit() {
        QUnit.module(name);
        suits.forEach(function (suite) {
            QUnit.test('ot.' + suite.name(), function (assert) {
                suite.runQunit(assert);
            });
        });
    }

    function readme() {
        var result = ot.readme();
        suits.forEach(function (suite) {
            result = readme.h(1, 'ot.' + suite.name());
        });
        return result;
    }

    var self = {
        addSuite: addSuite,
        runQunit: runQunit,
        readme: readme
    };
    return self;
};