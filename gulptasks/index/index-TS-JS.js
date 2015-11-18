/**
 * Created by sergey on 17.10.15.
 */

(function () {

  'use strict';

  var gulp = require('gulp');
  var browserify = require('browserify');
  var tsify = require('tsify');
  var source = require('vinyl-source-stream');
  var uglify = require('gulp-uglify');
  var streamify = require('gulp-streamify');
  var rename = require('gulp-rename');
  var livereload = require('gulp-livereload');
  var plumber = require('gulp-plumber');

  var appName = 'index';

  gulp.task('index-TS-JS', function () {

    console.log('Executing task index-TS-JS...');

    var pathToTS = ['src/' + appName + '/scripts/main.ts'];

    return browserify()
      .add(pathToTS)
      .plugin('tsify', {noImplicitAny: true})
      .bundle()
      .on('error', function (error) {
        console.error(error.toString());
      })
      .pipe(plumber())
      .pipe(source('main.min.js'))
      .pipe(streamify(uglify()))
      .pipe(gulp.dest('www/' + appName + '/scripts'))
      .pipe(livereload());

  });

}());
