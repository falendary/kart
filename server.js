/**
 * Created by sergey on 17.10.15.
 */
'use strict';
var express = require('express');
var app = express();

app.use(express.static('www'));

app.listen(3000, function(){
  console.info('Express server start at 3000 port');
});
