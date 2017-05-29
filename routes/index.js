var express = require('express');
var router = express.Router();
var OAuth = require('oauth');
var api = require('../controllers/post')
/* GET home page. */

// router.get('/', function(req, res) {
//   res.send('alive')
// })
router.post('/api/twitt', api.updateStatusTwitter)


module.exports = router;
