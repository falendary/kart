/**
 * Created by s.zhitenev on 18.11.2015.
 */
(function(){

  'use strict';

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var rename = require('gulp-rename');

  var appName = 'core';

  gulp.task('core-angular-chart-copy-css', function(){

    var pathToCSS = ['bower_components/angular-chart.js/dist/angular-chart.min.css'];

    return gulp.src(pathToCSS)
      .pipe(concat('angular-chart.css'))
      .pipe(rename('angular-chart.min.css'))
      .pipe(gulp.dest('www/' + appName + '/content/css'));

  })


}());
