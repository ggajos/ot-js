ot.log = function() {
    var levels = {
         10: "[ DEBUG ]",
         20: "[WARNING]",
        100: "[ ERROR ]"
    }

    function debug(msg) {
        log(10, msg)
    }

    function warning(msg) {
        log(20, msg);
    }

    function error(msg) {
        log(100, msg);
    }

    function log(level, msg) {
        console.log(levels[level], msg);
    }

    return {
        warning: warning,
        error: error,
        debug: debug
    }
};