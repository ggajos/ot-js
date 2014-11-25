ot.is = function(it) {

    function array() {
        return nameEquals('[object Array]');
    }

    function aFunction() {
        return nameEquals('[object Function]');
    }

    function notNull() {
        return !(it === undefined || it === null);
    }

    function nameEquals(string) {
        return Object.prototype.toString.call(it) === string;
    }

    return {
        aFunction: aFunction,
        array: array,
        notNull: notNull
    }
};