var OAuth = require('oauth');
require('dotenv').config()

var methods = {}

methods.updateStatusTwitter = function(req,res){
  console.log(req.body);
      var oauth = new OAuth.OAuth(
           'https://api.twitter.com/oauth/request_token',
           'https://api.twitter.com/oauth/access_token',
           process.env.API_KEY, //Consumer Key (API Key)
           process.env.API_SECRET, //Consumer Secret (API Secret)
           '1.0A',
           null,
           'HMAC-SHA1'
         );
         oauth.post(
         'https://api.twitter.com/1.1/statuses/update.json?status=' + req.body.twitt,
         process.env.USER_ACCEES_TOKEN, //test user token //Access Token
         process.env.USER_SECRET_TOKEN, //test user secret //Access Token Secret
         req.body.twitt,
         "twitt",
         function (err, data){
            // console.log('halooo ==>',words);
           if (err) console.error(err);
           console.log(require('util').inspect(data));
           res.send(JSON.parse(data));
         });
}


module.exports = methods
