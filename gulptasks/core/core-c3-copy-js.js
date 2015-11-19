/**
 * Created by s.zhitenev on 18.11.2015.
 */
(function () {

  'use strict';

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var rename = require('gulp-rename');

  var appName = 'core';

  gulp.task('core-c3-copy-js', function () {

    var pathToJs = [
      'bower_components/d3/d3.js',
      'bower_components/c3/c3.js'];

    return gulp.src(pathToJs)
      .pipe(concat('c3.js'))
      .pipe(uglify())
      .pipe(rename('c3.min.js'))
      .pipe(gulp.dest('www/' + appName + '/scripts'))

  })

}());
