/**
 * Created by sergey on 18.10.15.
 *
 */
(function(){

  'use strict';

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var rename = require('gulp-rename');

  var appName = 'core';

  gulp.task('core-Ionic-copy-css', function(){

      var pathToCSS = ['src/' + appName + '/ionic/css/ionic.min.css'];

      return gulp.src(pathToCSS)
        .pipe(concat('ionic.css'))
        .pipe(rename('ionic.min.css'))
        .pipe(gulp.dest('www/' + appName + '/content/css'));

  })


}());
