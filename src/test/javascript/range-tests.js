var fixtures
tests.push({
    name: 'range, (given random = 0)',
    before: function () {
        Math.random = function () {
            return 0;
        };
    },
    tests: [
        ot.test(function () {
            return ot.range(-3, 7).random();
        }).equals(-3),
        ot.test(function () {
            return ot.range(0, 1).random();
        }).equals(0),
        ot.test(function () {
            return ot.range(1, 1).random();
        }).equals(1),
        ot.test(function () {
            return ot.range(null, 1);
        }).throws(),
        ot.test(function () {
            return ot.range(1, null);
        }).throws(),
        ot.test(function () {
            return ot.range('a', null);
        }).throws(),
        ot.test(function () {
            return ot.range('a');
        }).throws(),
        ot.test(function () {
            return ot.range();
        }).throws(),
        ot.test(function () {
            return ot.range(3, 7).describe();
        }).equals('range { min: 3, max: 7 }')
    ]
});
tests.push({
    name: 'range, (given random = 1)',
    before: function () {
        Math.random = function () {
            return 1;
        };
    }, tests: [
        ot.test(function () {
            return ot.range(-3, 7).random();
        }).equals(7),
        ot.test(function () {
            return ot.range(0, 1).random();
        }).equals(1),
    ]
});