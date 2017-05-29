const OAuth = require('oauth');
const helper = require('../helper/util.js');

const post_status = (req,res) => {
  console.log('hohoho')
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'w1pFHbFKtnKQIxsL7RIElRBYW',
    'tFPSMXDtdiTOJrTLUEoZb5HckhwrHVG0geIlJHWVZRpUefkExd',
    '1.0A',
    null,
    'HMAC-SHA1'
  )
  let status = helper.fixedEncodeURIComponent(req.body.status);

  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${status}`,
    '298117495-rwhkUqAwcrOigoSUkcM5cqJiutYBqujCP08Yacpi', //test user token
    'i0BfSb3MnHSmfxzYrulu94eJb24IKud4fdtE8HRveiZVc', //test user secret
    status,
    'text',
    function (err, data){
      let msg = ( err ? err : data);
      res.send(msg);
      // done();

    });

}


module.exports = {
  post_status
}