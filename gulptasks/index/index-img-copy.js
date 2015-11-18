/**
 * Created by sergey on 17.10.15.
 */

(function(){

  'use strict';

  var gulp = require('gulp');

  var appName = 'index';

  gulp.task('index-img-copy', function(){

    console.log('Executing index-img-copy task...');

    var pathToImg = ['src/' + appName + '/content/img/**/*.{jpg,png,gif,svg}'];

    return gulp.src(pathToImg)
      .pipe(gulp.dest('www/' + appName + '/content/img'));

  });

}());
