/**
 * Created by sergey on 17.10.15.
 */

(function(){

  'use strict';

  var gulp = require('gulp');

  var appName = 'index';

  gulp.task('index-fonts-copy', function(){

    console.log('Executing task index-fonts-copy...');

    var pathToFonts = ['src/' + appName + '/content/fonts/**/*'];

    return gulp.src(pathToFonts)
      .pipe(gulp.dest('www/' + appName + '/content/fonts'));

  });

}());
