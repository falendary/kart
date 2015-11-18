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

  gulp.task('core-angular-ui-copy', function(){

    var pathToJs = [
      'node_modules/angular-ui-router/build/angular-ui-router.js',
      'node_modules/angular-ui-bootstrap/ui-bootstrap.js',
      'node_modules/angular-ui-bootstrap/ui-bootstrap-tpls.js'];

    return gulp.src(pathToJs)
      .pipe(concat('angular-ui.js'))
      .pipe(uglify())
      .pipe(rename('angular-ui.min.js'))
      .pipe(gulp.dest('www/' + appName + '/scripts' ))

  })

}());
