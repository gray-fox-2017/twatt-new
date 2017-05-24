const model = require('../models/twatts');

module.exports = {
  tweet: (req, res)=>{
    var post = req.body.posting;
    //console.log(post);
    model.posting(post, (data)=>{
      res.send(data);
    })
  }
}
