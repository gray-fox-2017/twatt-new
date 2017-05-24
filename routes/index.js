let twattController = require('../controllers/twattController')
const express = require('express')
const router = express.Router()

router.post('/api/updateTwatt', twattController.postTwatt)

module.exports = router