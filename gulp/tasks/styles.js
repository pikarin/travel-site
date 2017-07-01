var gulp         = require('gulp'),
    rename       = require("gulp-rename"),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded',
    includePaths: ["./node_modules/normalize.css"]
};
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function () {
  return gulp
    .src('./assets/stylesheets/main.scss')
    .pipe( sass(sassOptions).on('error', sass.logError) )
    .pipe( sourcemaps.write() )
    .pipe( autoprefixer(autoprefixerOptions) )
    .pipe( rename('style.css') )
    .pipe( gulp.dest('./public/css') );
});