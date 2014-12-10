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
        var s = ot.string();
        suits.forEach(function (suite) {
            s = s.append(suite.readme().value());
        });
        return s;
    }

    var self = {
        addSuite: addSuite,
        runQunit: runQunit,
        readme: readme
    };
    return self;
};