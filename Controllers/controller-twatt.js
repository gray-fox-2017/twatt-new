const twatt = require('../Models/oauth.js')
require('dotenv').config()

function twattPost (req,res,next){
  twatt.Auth(oauth=>{
    oauth.post(
                `https://api.twitter.com/1.1/statuses/update.json?status=Storyoverflow Title ${req.body.title} by ${req.body.username}`,
                process.env.Access_token,
                process.env.Access_token_secret,
                req.body.title,
                'text',
                function(e, data) {
                  if (e) console.error(data);
                  res.send(`${req.body.title} Posted by ${req.body.username}`)
                }
              );
            })  
          }  
        

module.exports = {
  twattPost
}