/**
 * Created by s.zhitenev on 17.11.2015.
 */
(function(){

  'use strict';

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var rename = require('gulp-rename');

  var appName = 'core';

  gulp.task('core-jquery-copy', function(){

    var pathToJs = [
      'node_modules/jquery/dist/jquery.js'];

    return gulp.src(pathToJs)
      .pipe(concat('jquery.js'))
      .pipe(uglify())
      .pipe(rename('jquery.min.js'))
      .pipe(gulp.dest('www/' + appName + '/scripts'));
  })

}());
