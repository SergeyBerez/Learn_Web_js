var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
//Prefix CSS with Autoprefixer
gulp.task('css', function() {
  return gulp
    .src('./src/pre_css/*.css')

    .pipe(
      autoprefixer({
        browsersl: ['last 2 versions'],
        cascade: false,
      }),
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
});
// Static server
gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: 'src/',
    },
    notify: false,
  });
  gulp.watch('./src/pre_css/*.css', gulp.series('css'));
  gulp.watch('src/*.html').on('change', browserSync.reload);
});




gulp.task('default', gulp.series('server'));

