var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');

//html minify
gulp.task('htmlmin', function() {
	gulp.src('./src/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./build/'))
});

// sass compile and minify
gulp.task('style', function() {
	gulp.src('./src/style/*.+(scss|sass|css)')
		.pipe(sass())
		.pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./build/style/'))
});

// js compress
gulp.task('uglify', function() {
	gulp.src('./src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./build/js/'))
});

// image optimization
gulp.task('imagemin' , function() {
	gulp.src('./src/img/*')
		.pipe(imagemin())
        .pipe(gulp.dest('./build/img/'))
});

// watch
gulp.task('watch', function() {
	gulp.watch('./src/*.html', ['htmlmin']);
	gulp.watch('./src/style/*.+(scss|sass)', ['style']);
	gulp.watch('./src/js/*.js', ['uglify']);
	gulp.watch('./src/img/*', ['imagemin']);
});