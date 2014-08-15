/*
 * findup-grunt-npmtasks
 * https://github.com/vipfront/findup-grunt-npmtasks
 *
 * Copyright (c) 2014 vipfront
 * Licensed under the MIT license.
 */

var path = require('path');
var findup = require('findup-sync');
var util = require('util');
exports = module.exports = function(grunt, opt) {
    // refer old grunt.loadNpmTasks
    var oldFn = grunt.loadNpmTasks;
    
    opt = opt || {};
    opt.path = opt.path || [];
    if(!util.isArray(opt.path)) {
        opt.path = [opt.path];
    }
    // add cwd to top
    opt.path.unshift('./');
    var paths = opt.path;

    // define new loadNpmTasks
    var loadNpmTasks = grunt.loadNpmTasks = grunt.task.loadNpmTasks = function(name) {
        // load gruntcollection
        if(~name.indexOf(path.sep)) {
            return oldFn.call(this, name);
        }

        var root = path.resolve('node_modules');
        for(var i = 0, j = paths.length; i < j; ++i) {
            // 末尾加上path.sep
            // var s = '';
            // s.length = 0;
            // s.lastIndexOf(path.sep) = -1;
            var searchCwd = paths[i];
            if(searchCwd.lastIndexOf(path.sep) != searchCwd.length - 1) {
                searchCwd = searchCwd + path.sep;
            }
            var filepath = findup('node_modules' + path.sep + name, {
                nocase: true,
                cwd: searchCwd
            });
            if(filepath) {
                oldFn.call(this, path.relative(root, filepath));
                // if find one, then quit
                return;
            }
        }
    }
};

// also provide a init method
exports.extend = exports.init = exports;
