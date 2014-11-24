tests.push({
    name: 'method',
    tests: [
        ot.test(function () {
            return ot.method(function() { throw Error() }).isThrowingException()
        }).equals(true),
        ot.test(function () {
            return ot.method(function() {}).isThrowingException()
        }).equals(false),
        ot.test(function () {
            return ot.method("")
        }).throws(),
        ot.test(function () {
            return ot.method()
        }).throws()
    ]
});