const router = require('express').Router();
const control = require('../controllers/twatt');

router.post('/', control.tweet);

module.exports = router;
