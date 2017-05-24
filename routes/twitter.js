var express = require('express')
var router = express.Router()

var controllerRecent = require('../controllers/twatt-new')

router.post('/twitter', controllerRecent.status)

module.exports = router