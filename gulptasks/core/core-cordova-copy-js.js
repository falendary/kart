/**
 * Created by sergey on 01.11.15.
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('core-cordova-copy-js', function(){

  var pathToJs = ['node_modules/ng-cordova/dist/ng-cordova.js'];

  return gulp.src(pathToJs)
    .pipe(uglify())
    .pipe(rename('ng-cordova.min.js'))
    .pipe(gulp.dest('www/core/scripts/'));

});
