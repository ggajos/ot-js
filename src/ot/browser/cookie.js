ot.cookie = function (name) {
    'use strict';
    ot.validate(name).notBlank();

    function write(value, date) {
        if(!date) {
            var defaultExpirationMs = 30 * 24 * 60 * 60 * 1000; // 30 days
            date = new Date();
            date.setTime(date.getTime() + defaultExpirationMs);
        }
        var c = [
            [name, value].join('='),
            ['expires', date.toGMTString()].join('='),
            ['path', '/'].join('=')
        ].join(';');
        ot.log().debug('writing cookie: ' + c);
        document.cookie = c;
    }

    function read() {
        var token = name + '=';
        var item = ot.list(document.cookie.split(';')).find(function(it) {
            return ot.string(it).trim().startsWith(token);
        });
        if(item) {
            ot.log().debug('reading cookie: ' + item);
            return ot.string(item).substringAfter(token).value();
        }
        ot.log().debug('unable to find cookie for token: ' + token);
        return null;
    }

    function exists() {
        return !ot.string(read()).isBlank();
    }

    function remove() {
        write('');
    }

    return {
        write: write,
        read: read,
        exists: exists,
        remove: remove
    };
};