# findup-grunt-npmtasks [![Build Status](https://secure.travis-ci.org/vipfront/findup-grunt-npmtasks.png?branch=master)](http://travis-ci.org/vipfront/findup-grunt-npmtasks)

findup your npm tasks base on grunt

## Getting Started
Install the module with: `npm install findup-grunt-npmtasks --save-dev`

```javascript
// use in Gruntfile.js
module.exports = function(grunt) {
    // here is all, easy? ah
    require('findup-grunt-npmtasks')(grunt);

    grunt.initConfig({
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
}
```

## License
Copyright (c) 2014 vipfront. Licensed under the MIT license.
