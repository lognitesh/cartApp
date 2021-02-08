var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./assets/css/'));
        
    });
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']).pipe(sass())
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./assets/css/'));
});