ot.cookie = function (name) {
    'use strict';
    ot.assertion(name).check(ot.is(name).notBlank(),
        'Name of cookie should be provided');

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
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i+= 1) {
            var c = ca[i].trim();
            if (c.indexOf(token) === 0) {
                ot.log().debug('reading cookie: ' + c);
                c = c.substring(token.length, c.length);
                return c;
            }
        }
        return null;
    }

    function exists() {
        return ot.is(read()).notBlank();
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