const OAuth = require('oauth');
require('dotenv').config();

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.consumerKey,
  process.env.consumerSecret,
  '1.0A',
  null,
  'HMAC-SHA1'
);

module.exports = {
  posting: (text, callback)=>{
    let status = text.split(' ').join('%20');
    //console.log(text);
    oauth.post(
      'https://api.twitter.com/1.1/statuses/update.json?status='+text,
      process.env.accessToken,
      process.env.accessTokenSecret,
      text,
      'text',
      function(e, data){
        if(e){
          console.log(e);
        } else {
          callback(data);
        }
      }
    );
  }
}
