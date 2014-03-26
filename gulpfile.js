var gulp = require('gulp');
var markdown = require('gulp-markdown');
var less = require('gulp-less');
var path = require('path');
var wrap = require("gulp-wrap");

gulp.task('less', function () {
  gulp.src('./less/styleguide.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('markdown', function () {
    gulp.src('index.md')
        .pipe(markdown())
        .pipe(wrap({ src: 'index.html'}))
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['less', 'markdown']);
