/**
 * Created by sergey on 17.10.15.
 */

(function () {

  'use strict';

  var gulp = require('gulp');
  var requireDir = require('require-dir');
  var core = requireDir('./gulptasks/core');
  var index = requireDir('./gulptasks/index');

  gulp.task('default', ['build']);
  gulp.task('dev', ['watch-all']);

}());


