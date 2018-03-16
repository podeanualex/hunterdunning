var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
let cleanCSS = require('gulp-clean-css');

gulp.task('styles', function() {
    gulp.src('sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default',function() {
  gulp.watch('sass/**/*.sass',['styles']);
});

//Minify CSS
gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

//Optimize images
gulp.task('image', function() {
  return gulp.src('img/logos/*')
             .pipe(imagemin())
             .pipe(gulp.dest('img/logos'));
});
