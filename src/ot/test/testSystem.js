ot.testSystem = function() {
    'use strict';
    var modules = [];

    function add(module) {
        modules.push(module);
    }

    function runQunit() {
        ot.logLevel.withNoLog(function() {
            modules.forEach(function(it) {
                it.runQunit();
            });
        });
    }

    function readme() {
        var s = ot.string();
        modules.forEach(function (it) {
            s = s.append(it.readme().value());
        });
        return s;
    }

    return {
        add: add,
        runQunit: runQunit,
        readme: readme
    };
};