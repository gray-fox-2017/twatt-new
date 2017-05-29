var express = require('express')
const app = express()
var bodyParser = require('body-parser')


var index = require('./routes/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index)

app.listen(3000)

module.exports = app