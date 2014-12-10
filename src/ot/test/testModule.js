ot.testModules = [];
ot.testModule = function(name) {
    'use strict';
    var suits = [];

    function addSuite(suite) {
        suits.push(suite);
    }

    function runQunit() {
        ot.logLevel.withNoLog(function() {
            QUnit.module(name);
            suits.forEach(function (suite) {
                QUnit.test('ot.' + suite.name(), function (assert) {
                    suite.runQunit(assert);
                });
            });
        });
    }

    var self = {
        addSuite: addSuite,
        runQunit: runQunit
    };
    ot.testModules.push(self);
    return self;
};