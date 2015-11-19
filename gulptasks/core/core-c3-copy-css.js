/**
 * Created by s.zhitenev on 18.11.2015.
 */
(function(){

  'use strict';

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var rename = require('gulp-rename');

  var appName = 'core';

  gulp.task('core-c3-copy-css', function(){

    var pathToCSS = ['bower_components/c3/c3.min.css'];

    return gulp.src(pathToCSS)
      .pipe(concat('c3.css'))
      .pipe(rename('c3.min.css'))
      .pipe(gulp.dest('www/' + appName + '/content/css'));

  })


}());
