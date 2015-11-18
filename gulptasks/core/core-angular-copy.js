/**
 * Created by sergey on 18.10.15.
 */
(function(){

  'use strict';

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var rename = require('gulp-rename');

  var appName = 'core';

  gulp.task('core-angular-copy', function(){

    var pathToJs = [
      'node_modules/angular/angular.js',
      'node_modules/angular-sanitize/angular-sanitize.js',
      'node_modules/angular-animate/angular-animate.js'];

    return gulp.src(pathToJs)
      .pipe(concat('angular.js'))
      .pipe(uglify())
      .pipe(rename('angular.min.js'))
      .pipe(gulp.dest('www/' + appName + '/scripts'));
  })

}());
