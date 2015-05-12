var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	cssmin = require('gulp-cssmin');
    connect = require('gulp-connect');

var basePaths = {
    src: 'site/static-dev/',
    dest: 'site/static/'
};

var paths = {
	scss: basePaths.src + 'scss/',
	css: basePaths.dest + 'css/'
};

gulp.task('default', function() {
	gulp.src(paths.scss + '*.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(gulp.dest(paths.css))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssmin())
        .pipe(gulp.dest(paths.css));
});

gulp.task('serve', ['default'], function() {
    connect.server({
         root: 'site'
    });
});
