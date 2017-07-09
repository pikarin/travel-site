var gulp = require('gulp'),
  modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
  return gulp.src(['./public/css/**/*.css', './public/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./public/scripts/'));
});