var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	responsive = require('gulp-responsive'),
	imagemin = require('gulp-imagemin'),
	mozjpeg = require('imagemin-mozjpeg'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	del = require('del'),
	browsersync = require('browser-sync').create();

gulp.task('js', function() {
	return gulp.src([
			'src/js/v/*.js',
			'src/js/*.js'
		])
		.pipe(sourcemaps.init())
		.pipe(concat('scripts.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('static/js'));
});

gulp.task('js:minify', ['js'], function(){
	return gulp.src('static/js/scripts.js')
		.pipe(uglify())
		.pipe(rename('scripts.min.js'))
		.pipe(gulp.dest('static/js'))
		.pipe(browsersync.stream());
});

gulp.task('scss', function(){
	return gulp.src('src/scss/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer())
		.pipe(gulp.dest('static/css'))
		.pipe(browsersync.stream());
});

gulp.task('watch', function(){
	gulp.watch('src/js/**/*.js', ['js:minify']);
	gulp.watch('src/scss/**/*.scss', ['scss']);
	//gulp.watch('layouts/**/*.html').on('change', browsersync.reload);
});

gulp.task('clear', function(){
	del(['static/']);
});

gulp.task('build', ['js:minify', 'scss']);

gulp.task('serve', ['watch'], function(){
	browsersync.init({
		proxy: "localhost:1313",
	});
});

gulp.task('default', ['clean'], function(){
	gulp.start('build');
});