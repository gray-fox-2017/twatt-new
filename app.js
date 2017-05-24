const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var index = require('./routes/index');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use('/', index);

app.listen(3000, function(){
  console.log('aplication runing on port 3000');
});

module.exports = app;
