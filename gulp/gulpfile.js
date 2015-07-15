var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var rename = require('gulp-rename');
var plugins = require('gulp-load-plugins')();


// Create a task wrapper for tasks in separate files
function getTask(task) { return require('./gulp-tasks/' + task)(gulp, plugins, config); }

var devRoot = "./",
		distRoot = "../build";


var config = {
	siteURL: "localhost",
	paths: {
		dev:   {
			js:     	 	devRoot + 'assets/js/app.js',
			sass:   		devRoot + 'assets/sass/**/*.scss',
			//css:    		devRoot + 'assets/css',
			foundation:	devRoot + 'bower_components/foundation/scss',
			//img: 				devRoot + 'assets/img',
			fonts:  	 [devRoot + 'assets/font/src/**/*.otf', devRoot + 'assets/font/src/**/*.ttf'],
			iconFont: 	devRoot + 'assets/font/icons/**/*.svg',
			iconCss: 		devRoot + "assets/font/sass"
		},
		dist: {
			assets: 		distRoot + '/assets/',
			js:     		distRoot + '/assets/js',
			css:    		distRoot + '/assets/css',
			//img: 				distRoot + '/assets/img',
			fonts:  		distRoot + '/assets/font',
			iconFont: 	distRoot + '/assets/font/icons/'
		}
	}
};

gulp.task('sass', getTask('sass'));
gulp.task('clean', getTask("clean"));
gulp.task('scripts', getTask('scripts'));
gulp.task('iconbuild', getTask('iconfont'));

gulp.task('browsersync', getTask('browsersync'));

gulp.task('default', ['scripts', 'sass', 'iconbuild', 'browsersync'], function () {
	gulp.watch(config.paths.dev.js, ['scripts']);
	gulp.watch(config.paths.dev.sass, ['sass']);
	//gulp.watch(config.paths.dev.font, ['font']);
	//gulp.watch(config.paths.dev.iconFont, ['iconbuild']);
});
