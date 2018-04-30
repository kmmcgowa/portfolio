var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	hash = require('gulp-hash'),
	responsive = require('gulp-responsive'),
	imagemin = require('gulp-imagemin'),
	mozjpeg = require('imagemin-mozjpeg'),
	del = require('del');


gulp.task('scss', function(){


	del(['static/css/**/*'])

	gulp.src('src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'nested',
			includePaths: ['node_modules']
		}))
		.pipe(autoprefixer())
		.pipe(hash())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('static/css'))
		.pipe(hash.manifest('hash.json'))
		.pipe(gulp.dest('data/css'))
})

gulp.task('imgs', function(){
	del(['static/img/**/*'])
	gulp.src('src/img/**/*')
		.pipe(hash())
		// .pipe(responsive({
		// 	'*': [{
		// 		width: 480,
		// 		rename: {suffix: '-sm'},
		// 	},{
		// 		width: 480 * 2,
		// 		rename: {suffix: '-sm@2x'},
		// 	},{
		// 		width: 800,
		// 	},{
		// 		width: 800 * 2,
		// 		rename: {suffix: '-reg@2x'},
		// 	}],
		// },{
		// 	silent: true
		// }))
		.pipe(gulp.dest('static/img'))
		.pipe(hash.manifest('hash.json'))
		.pipe(gulp.dest('data/img'))
})

gulp.task('imgs:build', ['imgs'], function(){
	gulp.src('static/img/*.{jpg,png,gif,svg}')
		.pipe(imagemin([
			imagemin.gifsicle(),
			imagemin.optipng(),
			imagemin.svgo(),
			mozjpeg(),
		]))
		.pipe(gulp.dest('static/img'))
})

gulp.task('js', function(){
	del(['static/js/**/*'])
	gulp.src('src/js/**/*')
		.pipe(hash())
		.pipe(gulp.dest('static/js'))
		.pipe(hash.manifest('hash.json'))
		.pipe(gulp.dest('data/js'))
})

gulp.task('watch', ['scss', 'imgs', 'js'], function(){
	gulp.watch('src/scss/**/*', ['scss'])
	gulp.watch('src/img/**/*', ['imgs'])
	gulp.watch('src/js/**/*', ['js'])
})

gulp.task('default', ['watch'])

gulp.task('prod', [])