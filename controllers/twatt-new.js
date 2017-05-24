var modelsRecent = require('../models/twatt-new')
require('dotenv').config()

module.exports = {
	status : (req, res) => {
	  modelsRecent.getOauth(oauth => {
	    oauth.post(
	      'https://api.twitter.com/1.1/statuses/update.json?status='+req.body.status,
	      process.env.ACCESS_TOKEN, //test user token
	      process.env.TOKEN_SECRET, //test user secret
	      req.body.status,
	      'text',
	      function (e, data){
	        if (e) console.error(e);
	        res.send(data)
	      });
	  })
	}
}