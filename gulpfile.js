var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	hash = require('gulp-hash'),
	del = require('del');


gulp.task('scss', function(){


	del(['static/css/**/*'])

	gulp.src('src/scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(autoprefixer({
			browsers: ['last 20 versions']
		}))
		.pipe(hash())
		.pipe(gulp.dest('static/css'))
		.pipe(hash.manifest('hash.json'))
		.pipe(gulp.dest('data/css'))
})

gulp.task('imgs', function(){
	del(['static/img/**/*'])
	gulp.src('src/img/**/*')
		.pipe(hash())
		.pipe(gulp.dest('static/img'))
		.pipe(hash.manifest('hash.json'))
		.pipe(gulp.dest('data/img'))
})

gulp.task('js', function(){
	del(['static/js/**/*'])
	gulp.src('src/js/**/*')
		.pipe(hash())
		.pipe(gulp.dest('static/js'))
		.pipe(hash.manifest('hash.json'))
		.pipe(gulp.dest('data/js'))
})

gulp.task('watch', ['scss', 'img', 'js'], function(){
	gulp.watch('src/scss/**/*', ['scss'])
	gulp.watch('src/img/**/*', ['img'])
	gulp.watch('src/js/**/*', ['js'])
})

gulp.task('default', ['watch'])