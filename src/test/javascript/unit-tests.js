describe('ot', function () {
    'use strict';
    var tests = [
        {
            name: 'list',
            given: function () {
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
        },
        {
            name: 'range, (given random = 0)',
            given: function () {
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
        },
        {
            name: 'range, (given random = 1)',
            given: function () {
                Math.random = function () {
                    return 1;
                };
            },
            tests: [
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
        },
        {
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
        },
    ];

    tests.forEach(function (testGroup) {
        describe(testGroup.name, function () {
            testGroup.tests.forEach(function (testCase) {
                var expr = testCase.test.toString()
                    .replace(/function \(\)/g, '')
                    .replace(/function\(\)/g, '')
                    .replace(/return/g, '')
                    .replace(/;/g, '');
                if (testCase.equal) {
                    it([expr, testCase.equal].join(' == '), function () {
                        if (testGroup.given) {
                            testGroup.given();
                        }
                        if (testCase.equal) {
                            expect(testCase.test()).toBe(testCase.equal);
                        }
                    });
                }
                if (testCase.exception) {
                    it([expr, 'should throw error'].join(' '), function () {
                        if (testGroup.given) {
                            testGroup.given();
                        }
                        if (testCase.exception) {
                            try {
                                testCase.test();
                                expect(true).toBe(false);
                            } catch (err) {
                                expect(true).toBe(true);
                            }
                        }
                    });
                }
            });
        });
    });
});