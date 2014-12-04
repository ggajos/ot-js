module.exports = function (grunt) {
    'use strict';

    function concat() {
        grunt.loadNpmTasks('grunt-contrib-concat');
        return {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            },
            testRelease: {
                src: ['src/**/*.js'],
                dest: 'test/qunit/build/<%= pkg.name %>.js'
            },
            testSuite: {
                src: ['test/unit/**/*.js'],
                dest: 'test/qunit/build/<%= pkg.name %>-testsuite.js'
            }
        };
    }

    function uglify() {
        grunt.loadNpmTasks('grunt-contrib-uglify');
        return {
            build: {
                src: ['src/_header.js', 'src/**/*.js'],
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        };
    }

    function qunit() {
        grunt.loadNpmTasks('grunt-contrib-qunit');
        return {
            all: {
                options: {
                    urls: [
                        'http://localhost:8234/index.html'
                    ]
                }
            }
        };
    }

    function connect() {
        grunt.loadNpmTasks('grunt-contrib-connect');
        return {
            server: {
                options: {
                    port: 8234,
                    base: 'test/qunit'
                }
            }
        };
    }

    function watch() {
        grunt.loadNpmTasks('grunt-contrib-watch');
        return {
            test: {
                options: {
                    atBegin: ['qunit']
                },
                files: ['Gruntfile.js', 'src/**', 'test/unit/**', '.jshintrc'],
                tasks: ['concat', 'jshint', 'qunit']
            }
        };
    }

    function jshint() {
        grunt.loadNpmTasks('grunt-contrib-jshint');
        return {
            options: {
                jshintrc: true
            },
            all: ['Gruntfile.js', 'src/**/*.js', 'test/unit/**/*.js']
        };
    }

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: concat(),
        uglify: uglify(),
        qunit: qunit(),
        connect: connect(),
        watch: watch(),
        jshint: jshint()
    });

    grunt.registerTask('default', ['concat', 'connect:server', 'watch']);
    grunt.registerTask('release', ['concat', 'uglify']);
    grunt.registerTask('test', ['connect:server', 'qunit']);
};