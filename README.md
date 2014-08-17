# findup-grunt-npmtasks 

通过重写`grunt.loadNpmTasks`方法，实现自动向上查找`grunt`插件，达到多项目共用`grunt`插件，避免重复下载的目的。该模块支持自定义查找目录

## Getting Started
使用下面的命令安装该模块:   
`npm install findup-grunt-npmtasks --save-dev`

```javascript
// 在Gruntfile.js中使用  
module.exports = function(grunt) {
    // 就是这么简单，一次调用即可
    // 第二个参数是可选的，默认仅从当前目录开始向上查找插件。第二个参数从v0.3.0版本开始提供
    // 如果指定了多个搜索路径，则会按先后顺序搜索，找到后立即停止搜索，请注意，当前目录路径会默认加到path配置最前面。你可以使用`grunt -v`来查看最终加载的插件文件
    // 针对一个具体的目录，会先在其中的node_modules目录中查找插件，接着直接在目录下查找插件，找到即止
    require('findup-grunt-npmtasks')(grunt, {
    	path: ['pathA', 'pathB']
    });

    grunt.initConfig({
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
}
```

## ChangeLog
v0.1.0  
1、猴子出世  
v0.3.0  
1、增加opt.path选项支持

## License
Copyright (c) 2014 vipfront. Licensed under the MIT license.
