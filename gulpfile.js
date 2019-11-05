var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
//Prefix CSS with Autoprefixer
gulp.task('css', function() {
  return gulp
    .src('./app/src/css/**/*.css')

    .pipe(
      autoprefixer({
        browsersl: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest('./app/dist/'))
    .pipe(browserSync.stream());
});
// Static server
gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: 'app/',
    },
    notify: false,
  });
  gulp.watch('./app/src/css/style.css', gulp.series('css'));
  gulp.watch('./app/*.html').on('change', browserSync.reload);
});




gulp.task('default', gulp.series('server'));

