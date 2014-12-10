ot.readme = function (initialText) {
    'use strict';
    var text = initialText || '';

    function h(level, header) {
        for (var i = 1; i <= level; i += 1) {
            text += '#';
        }
        return appendString([header, ' ', header, '\n'].join(''));
    }

    function appendString(it) {
        return ot.readme(text + it);
    }

    function appendReadme(it) {
        return appendString(it.text());
    }

    return {
        h: h,
        appendReadme: appendReadme,
        appendString: appendString
    };
};