# findup-grunt-npmtasks 

Lookup Npm Tasks recursively in Grunt

## Getting Started
Install the module with: 
`npm install findup-grunt-npmtasks --save-dev`

```javascript
// use in Gruntfile.js
module.exports = function(grunt) {
    // That's all, so easy! aha
    require('findup-grunt-npmtasks')(grunt);

    grunt.initConfig({
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
}
```

## License
Copyright (c) 2014 vipfront. Licensed under the MIT license.
