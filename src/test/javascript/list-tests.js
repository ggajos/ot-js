tests.push({
    name: 'list',
    before: function () {
        Math.random = function () {
            return 0;
        };
    },
    tests: [
        {
            test: function () {
                return ot.list([7, 5, 97]).random();
            },
            equal: 7
        },
        {
            test: function () {
                return ot.list(['a', 'b']).random();
            },
            equal: 'a'
        },
        {
            test: function () {
                return ot.list([]).random();
            },
            exception: true
        },
        {
            test: function () {
                return ot.list(null);
            },
            exception: true
        },
        {
            test: function () {
                return ot.list();
            },
            exception: true
        },
        {
            test: function () {
                return ot.list([7, 5, 97]).describe();
            },
            equal: 'list { elements: 7,5,97 }'
        }
    ]
});