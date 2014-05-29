/*
 * findup-grunt-npmtasks
 * https://github.com/vipfront/findup-grunt-npmtasks
 *
 * Copyright (c) 2014 vipfront
 * Licensed under the MIT license.
 */

var path = require('path');
var findup = require('findup-sync');
exports = module.exports = function(grunt) {
    // refer old grunt.loadNpmTasks
    var oldFn = grunt.loadNpmTasks;

    // new define one
    var loadNpmTasks = grunt.loadNpmTasks = grunt.task.loadNpmTasks = function(name) {
        // load gruntcollection
        if(~name.indexOf(path.sep)) {
            return oldFn.call(this, name);
        }

        var root = path.resolve('node_modules');
        var filepath = findup('node_modules/' + name, {
            nocase: true
        });
        if(filepath) {
            oldFn.call(this, path.relative(root, filepath));
        }
    }
};

// also provide a init method
exports.init = exports;
