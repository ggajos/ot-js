ot.log = function() {
    'use strict';
    var levels = {
        10:  '[ DEBUG ]',
        20:  '[WARNING]',
        100: '[ ERROR ]'
    };

    function debug(msg) {
        log(10, msg);
    }

    function warning(msg) {
        log(20, msg);
    }

    function error(msg) {
        log(100, msg);
    }

    function log(level, msg) {
        if(level >= ot.logLevel.current()) {
            console.log(levels[level], msg);
        }
    }

    return {
        warning: warning,
        error: error,
        debug: debug
    };
};
ot.logLevel = (function() {
    'use strict';
    var currentLevel = 20;

    function override(value) {
        currentLevel = value;
    }

    function withLevel(value, f) {
        var oldLevel = currentLevel;
        currentLevel = value;
        f();
        currentLevel = oldLevel;
    }

    function withNoLog(f) {
        withLevel(9999, f);
    }

    function withLogDebug(f) {
        withLevel(0, f);
    }

    function current() {
        return currentLevel;
    }

    return {
        current: current,
        override: override,
        withNoLog: withNoLog,
        withLogDebug: withLogDebug
    };
}());