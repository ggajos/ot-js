var randomReturnsZero = function () {
    Math.random = function () {
        return 0;
    };
}
tests.push({
    name: 'list',
    tests: [
        ot.test(function () {
            randomReturnsZero();
            return ot.list([7, 5, 97]).random();
        }).equals(7),
        ot.test(function () {
            randomReturnsZero();
            return ot.list(['a', 'b']).random();
        }).equals('a'),
        ot.test(function () {
            randomReturnsZero();
            return ot.list([]).random();
        }).throws(),
        ot.test(function () {
            return ot.list(null);
        }).throws(),
        ot.test(function () {
            return ot.list();
        }).throws(),
        ot.test(function () {
            return ot.list([7, 5, 97]).describe();
        }).equals('list { elements: 7,5,97 }')
    ]
});