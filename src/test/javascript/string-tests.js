tests.push({
    name: 'string.builder',
    tests: [
        {
            test: function () {
                return ot.string.builder('name', {
                    min: 10,
                    max: -40
                }).build();
            },
            equal: 'name { min: 10, max: -40 }'
        },
        {
            test: function () {
                return ot.string.builder('name', {}).build();
            },
            equal: 'name {  }'
        },
        {
            test: function () {
                return ot.string.builder('name', null).build();
            },
            equal: 'name {  }'
        },
        {
            test: function () {
                return ot.string.builder(null, null).build();
            },
            exception: true
        },
    ]
});