var express = require('express');
var router = express.Router();
const twatt = require('../Controllers/controller-twatt.js')
/* GET home page. */

router.get('/', function(req, res, next) {
  res.send('Please go to localhost:3000/twatt to post')
});

router.post('/twatt', twatt.twattPost)

module.exports = router;
