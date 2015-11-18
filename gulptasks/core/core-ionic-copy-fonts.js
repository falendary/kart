/**
 * Created by sergey on 18.10.15.
 */
(function(){

  'use strict';

  var gulp = require('gulp');

  var appName = 'core';

  gulp.task('core-ionic-copy-fonts', function(){

    var pathToFonts = ['src/' + appName + '/ionic/fonts/**/*.{eot,svg,ttf,woff}'];

    return gulp.src(pathToFonts)
      .pipe(gulp.dest('www/' + appName + '/content/fonts'));

  })

}());
