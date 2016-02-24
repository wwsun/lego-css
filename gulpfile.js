var gulp = require('gulp');
var gutil = require('gulp-util');
var plugins = require('gulp-load-plugins')();

gulp.task('default', [ 'watch' ]);

gulp.task('build-css', function () {
  return gulp.src('less/legocss.less')
    .pipe(plugins.plumber())
    .pipe(plugins.less())
    .on('error', function (err) {
      gutil.log(err);
      this.emit('end');
    })
    .pipe(gulp.dest('build'))
    .on('error', gutil.log);
});

gulp.task('watch', function () {
  gulp.watch('less/*.less', [ 'build-css' ]);
});