tests.push({
    name: 'range, (given random = 0)',
    before: function () {
        Math.random = function () {
            return 0;
        };
    },
    tests: [
        {
            test: function () {
                return ot.range(-3, 7).random();
            },
            equal: -3
        },
        {
            test: function () {
                return ot.range(0, 1).random();
            },
            equal: 0
        },
        {
            test: function () {
                return ot.range(1, 1).random();
            },
            equal: 1
        },
        {
            test: function () {
                return ot.range(null, 1);
            },
            exception: true
        },
        {
            test: function () {
                return ot.range(1, null);
            },
            exception: true
        },
        {
            test: function () {
                return ot.range('a', null);
            },
            exception: true
        },
        {
            test: function () {
                return ot.range('a');
            },
            exception: true
        },
        {
            test: function () {
                return ot.range();
            },
            exception: true
        },
        {
            test: function () {
                return ot.range(3, 7).describe();
            },
            equal: 'range { min: 3, max: 7 }'
        },
    ]
});
tests.push({
    name: 'range, (given random = 1)',
    before: function () {
        Math.random = function () {
            return 1;
        };
    }, tests: [
        {
            test: function () {
                return ot.range(-3, 7).random();
            },
            equal: 7
        },
        {
            test: function () {
                return ot.range(0, 1).random();
            },
            equal: 1
        },
    ]
});