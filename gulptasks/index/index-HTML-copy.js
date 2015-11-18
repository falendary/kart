/**
 * Created by sergey on 17.10.15.
 */

(function () {

  'use strict';

  var gulp = require('gulp');
  var replace = require('gulp-replace');
  var minifyHtml = require('gulp-minify-html');

  var appName = 'index';

  gulp.task('index-HTML-copy', function () {

    console.log('Executing task index-HTML-copy...');

    var pathToHTML = ['src/' + appName + '/index.html'];

    return gulp.src(pathToHTML)
      .pipe(replace(/{date}/g, new Date().getTime()))
      .pipe(minifyHtml())
      .pipe(gulp.dest('www/'));

  });

}());
