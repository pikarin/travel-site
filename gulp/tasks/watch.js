var gulp         = require('gulp'),
    browserSync  = require('browser-sync').create();

gulp.task('cssInject', ['sass'], function() {
    return gulp.src('./public/css/style.css')
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
});

gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "./public/"
        }
    });

    gulp.watch('public/index.html', function() {
        browserSync.reload();
    });

    gulp.watch('assets/stylesheets/**/*.scss', ['cssInject'])
        .on('change', function(event) {
          console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });

    gulp.watch('assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });
});
