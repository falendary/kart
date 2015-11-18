/**
 * Created by s.zhitenev on 18.11.2015.
 */
(function(){

  'use strict';

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var rename = require('gulp-rename');

  var appName = 'core';

  gulp.task('core-angular-chart-copy-js', function(){

    var pathToJs = [
      'node_modules/chart.js/Chart.js',
      'bower_components/angular-chart.js/dist/angular-chart.js'];

    return gulp.src(pathToJs)
      .pipe(concat('angular-chart.js'))
      .pipe(uglify())
      .pipe(rename('angular-chart.min.js'))
      .pipe(gulp.dest('www/' + appName + '/scripts' ))

  })

}());
