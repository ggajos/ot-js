tests.push({
    name: 'string.builder',
    tests: [
        ot.test(function () {
            return ot.string.builder('name', {
                min: 10,
                max: -40
            }).build();
        }).equals('name { min: 10, max: -40 }'),
        ot.test(function () {
            return ot.string.builder('name', {}).build();
        }).equals('name {  }'),
        ot.test(function () {
            return ot.string.builder('name', null).build();
        }).equals('name {  }'),
        ot.test(function () {
            return ot.string.builder(null, null).build();
        }).throws()
    ]
});