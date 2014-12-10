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
        var result = ot.readme();
        modules.forEach(function (it) {
            result = result.appendReadme(it.readme());
        });
        return result;
    }

    return {
        add: add,
        runQunit: runQunit,
        readme: readme
    };
};