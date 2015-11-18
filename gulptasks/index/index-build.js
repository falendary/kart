/**
 * Created by sergey on 17.10.15.
 */
(function(){

  'use strict';

  var gulp = require('gulp');

  gulp.task('index-build', ['index-fonts-copy',
    'index-HTML-copy',
    'index-HTML-templateCache',
    'index-img-copy',
    'index-SCSS-CSS',
    'index-TS-JS'])

}());
