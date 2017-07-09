var gulp      = require('gulp'),
    rename    = require('gulp-rename'),
    svgSprite = require('gulp-svg-sprite'),
    del       = require('del'),
    svg2png   = require('gulp-svg2png');

var config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      variables: {
        replaceSvgWithPng: function() {
          return function(sprite, render) {
            return render(sprite).split('.svg').join('.png');
          };
        }
      },
      sprite: 'svg/sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('beginClean', function() {
  return del(['./public/images/sprite/']).then(paths => {
    console.log('Deleted directory:\n', paths.join('\n'));
  });
});

gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./public/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./public/images/sprite/'));
});

gulp.task('createPngCopy', ['createSprite'], function() {
  return gulp.src('./public/images/sprite/css/svg/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./public/images/sprite/css/svg/'));
});

gulp.task('copySpriteCSS', ['createPngCopy'], function() {
  return gulp.src('./public/images/sprite/css/*.css')
    .pipe(rename('_sprite.scss'))
    .pipe(gulp.dest('./assets/stylesheets/modules/'));
});

gulp.task('endClean', ['copySpriteCSS'], function() {
  del(['public/images/sprite/css/sprite.css']).then(paths => {
    console.log('Deleted file:\n', paths.join('\n'));
  });
});

gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy', 'copySpriteCSS', 'endClean']);