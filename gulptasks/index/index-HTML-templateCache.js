/**
 * Created by sergey on 17.10.15.
 */

(function(){

  'use strict';

  var gulp = require('gulp');
  var htmlmin = require('gulp-htmlmin');
  var ngHtml2Js = require('gulp-ng-html2js');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');

  var appName = 'index';

  gulp.task('index-HTML-templateCache', function(){

    console.log('Executing task index-HTML-templateCache...');

    var pathToHtml = ['src/' + appName + '/scripts/app/**/*.html'];

    return gulp.src(pathToHtml)
      .pipe(htmlmin({collapseWhitespace: true}))
      .on('error', function(error){
        console.error('\nError on HTML minifaction: \n', error.toString());
        this.emit('end');
      })
      .pipe(ngHtml2Js({
        moduleName: 'app'
      }))
      .pipe(concat('templates.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('src/' + appName + '/scripts/'));

  });

}());
