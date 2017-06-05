var express = require('express');
var router = express.Router();
const pstatus_controllers = require('../controllers/pstatus_controllers.js');

/* GET users listing. */
// router.get('/:status', pstatus_controllers.post_status);

router.post('/', pstatus_controllers.post_status);

module.exports = router;
