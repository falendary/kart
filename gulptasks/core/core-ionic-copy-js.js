/**
 * Created by sergey on 18.10.15.
 *
 */

(function(){

  'use strict';

  var gulp = require('gulp');
  var uglify = require('gulp-uglify');
  var rename = require('gulp-rename');
  var concat = require('gulp-concat');

  var appName = 'core';

  gulp.task('core-Ionic-copy-js', function(){

    var pathToJs = [
      'src/' + appName + '/ionic/js/ionic.js',
      'src/' + appName + '/ionic/js/ionic-angular.js',
      'bower_components/ionic-datepicker/dist/ionic-datepicker.bundle.min.js'];

    return gulp.src(pathToJs)
      .pipe(concat('ionic.js'))
      .pipe(uglify())
      .pipe(rename('ionic.min.js'))
      .pipe(gulp.dest('www/' + appName + '/scripts/'));

  })

}());
