/**
 * Created by s.zhitenev on 12.11.2015.
 *
 */


(function(){

  'use strict';

  var gulp = require('gulp');
  var uglify = require('gulp-uglify');
  var rename = require('gulp-rename');

  var appName = 'core';

  gulp.task('core-pouchdb-copy', function(){

    var pathToDb = ['node_modules/pouchdb/dist/pouchdb.js'];

    return gulp.src(pathToDb)
      .pipe(uglify())
      .pipe(rename('pouchdb.min.js'))
      .pipe(gulp.dest('www/' + appName + '/scripts'));


  });

}());
