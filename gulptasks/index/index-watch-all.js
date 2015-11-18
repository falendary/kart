/**
 * Created by sergey on 17.10.15.
 *
 */

(function(){

  'use strict';

  var gulp = require('gulp');
  var livereload = require('gulp-livereload');

  var appName = 'index';

  gulp.task('index-watch-all', function(){
    livereload.listen();
    gulp.watch('src/' + appName + '/**/*.scss', ['index-SCSS-CSS']);
    gulp.watch('src/' + appName + '/**/*.ts', ['index-TS-JS']);
    gulp.watch('src/' + appName + '/**/*.html', ['index-HTML-copy', 'index-HTML-templateCache', 'index-TS-JS']);
  })

}());
