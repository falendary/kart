/**
 * Created by s.zhitenev on 19.11.2015.
 */
(function(){

  'use strict';

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var rename = require('gulp-rename');

  var appName = 'core';

  gulp.task('core-moment-copy', function(){

    var pathToJs = [
      'node_modules/moment/moment.js',
      'node_modules/moment/locale/ru.js'];

    return gulp.src(pathToJs)
      .pipe(concat('moment.js'))
      .pipe(uglify())
      .pipe(rename('moment.min.js'))
      .pipe(gulp.dest('www/' + appName + '/scripts'));
  })

}());
