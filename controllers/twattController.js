let twatt = require('../models/twatt')
methods = {}

methods.postTwatt = (req, res) => {
  twatt.getOauth(oauth => {
    oauth.post(
      'https://api.twitter.com/1.1/statuses/update.json?status=Update%20status%20using%20my%20testing%20app',
      process.env.TOKEN, //test user token
      process.env.TOKEN_SECRET, //test user secret
      'Update status using my testing app',
      'text',
      function (e, data){
        if (e) console.error(e);
        res.send(data)
      });
  })
}

module.exports = methods