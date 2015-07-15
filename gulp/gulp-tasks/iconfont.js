module.exports = function (gulp, plugin, config) {
	return function () {

		gulp.src(config.paths.dev.iconFont)
	    .pipe(plugin.iconfont({
	      fontName: 'icons',
	      normalize: true,
	      fontHeight: 1001
	    }))
	    .on('codepoints', function(codepoints, options) {
				console.log(codepoints);
	      gulp.src(config.paths.dev.iconCss + "/_icon.template.scss")
	      .pipe(plugin.consolidate('lodash', {
	          glyphs: codepoints,
	          fontName: 'icons',
	          fontPath: '../fonts/',
	          className: 'ico'
	        }))
	      .pipe(plugin.rename('_icons.scss'))
	      .pipe(gulp.dest('assets/sass'));
	    })
	    .pipe(gulp.dest(config.paths.dist.iconFont));


		}
	};
