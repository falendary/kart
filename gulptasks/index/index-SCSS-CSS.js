/**
 * Created by sergey on 17.10.15.
 */

(function () {

  'use strict';

  var gulp = require('gulp');
  var sass = require('gulp-sass');
  var minifyCss = require('gulp-minify-css');
  var rename = require('gulp-rename');

  var appName = 'index';

  gulp.task('index-SCSS-CSS', function () {

    console.log('Executing index-SCSS-CSS task...');

    var pathToSCSS = ['src/' + appName + '/content/scss/app.scss'];

    return gulp.src(pathToSCSS)
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(minifyCss({
        keepSpecialComments: 0
      }))
      .pipe(rename('index.min.css'))
      .pipe(gulp.dest('./www/' + appName + '/content/css/'));
  });

}());
