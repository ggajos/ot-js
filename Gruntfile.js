module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
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
        },
        uglify: {
            build: {
                src: ['src/_header.js', 'src/**/*.js'],
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        qunit: {
            all: {
                options: {
                    urls: [
                        'http://localhost:8234/index.html'
                    ]
                }
            }
        },
        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 8234,
                    base: 'test/qunit'
                }
            }
        },
        watch: {
            test: {
                files: ['Gruntfile.js', 'src/**', 'test/unit/**', '.jshintrc'],
                tasks: ['concat', 'jshint', 'test']
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['Gruntfile.js', 'src/**/*.js', 'test/unit/**/*.js']
        }
    });



    // Default task(s).
    grunt.registerTask('default', ['concat', 'connect:server', 'watch']);
    grunt.registerTask('release', ['concat', 'uglify']);
    grunt.registerTask('test', ['connect:server', 'qunit']);
};