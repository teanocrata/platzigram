var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('styles', function() {
  // Vamos a decirle que tome nuestro archivo sass y lo pase a public
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
});

gulp.task('assets', function(){
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['styles', 'assets']);
