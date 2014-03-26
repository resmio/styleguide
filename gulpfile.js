var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  gulp.src('./less/styleguide.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('markdown', function () {
    gulp.src('index.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('default', ['less', 'markdown']);
