---
title: 04-grunt
date: 2018-05-03 10:28:37
tags: 前端-00-基础
categories: 前端-00-基础
---
##### ==package.json==


```
{
  "name": "grunt-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "grunt": "^1.0.1",
    "grunt-contrib-clean": "^1.0.0",
    "grunt-contrib-concat": "^1.0.1",
    "grunt-contrib-copy": "^1.0.0",
    "grunt-contrib-cssmin": "^1.0.1",
    "grunt-contrib-imagemin": "^1.0.1",
    "grunt-contrib-jshint": "^1.0.0",
    "grunt-contrib-uglify": "^2.0.0",
    "grunt-contrib-watch": "^1.0.0",
    "load-grunt-tasks": "^3.5.2"
  }
}
```

##### ==gruntfile.js==

```
module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	var config={
		app:'app',
		dist:'dist',
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// config:config,

		/*copy:{
			dist:{
				files: [
			        {
			          expand: true,     // Enable dynamic expansion.
			          cwd: 'app/css/',      // Src matches are relative to this path.
			          src: ['**'], // Actual pattern(s) to match.
			          dest: 'dist/css/',   // Destination path prefix.
			          // ext: ['.js','.html'],   // Dest filepaths will have this extension.
			          extDot: 'first'   // Extensions in filenames begin after the first dot
			        },
				],
			}
		},*/
		copy:{
			html:{
				files:[
					{'dist/index.html':'app/index.html'}
				]
			}
		},

		clean:{
			dist:{
				src:['dist/**/*'],
			}
		},

		concat: {
	        js: {
				options:{
					separator:';'
				},
	            src: ['app/js/index.js','app/js/index02.js'],
	            dest: 'dist/js/index.js'
	        },
	        css:{
	        	src: ['app/css/reset.css','app/css/index.css'],
	        	dest: 'dist/css/index.css'
	        },
		},

		uglify: {
	      options: {
	        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
	      },
	      dist: {
	         files: [{
		      expand: true,
		      cwd: 'dist/js',
		      src: ['*.js', '!*.min.js'],
		      dest: 'dist/js',
		      ext: '.min.js'
	        }]
	      }
		},

		cssmin: {
			options: {
			  banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			target: {
				files: [{
					expand: true,
					cwd: 'dist/css',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/css',
					ext: '.min.css'
				}]
			}
		},

		imagemin: {
           /* 压缩图片大小 */
           dist: {
               options: {
                   optimizationLevel: 3 //定义 PNG 图片优化水平
               },
               files: [{
                   expand: true,
                   cwd: 'app/img/',
                   src: ['**/*.{png,jpg,jpeg,gif}'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
                   dest: 'dist/img/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
               }]
           }
		},

	});

	grunt.registerTask('default', ['copy', 'concat', 'uglify','cssmin','imagemin']);
};
```
