const express = require('express');
const router = express.Router();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'JKwPbCkDFUZ0FfIcfkxgkHB1Z',
  consumer_secret: 'UC6pkxzi1ne0tbhPQglEMt5wM4weg2t2aICLmqLK5nB2PZeBpi',
  access_token_key: '3249023658-l6zQYReg4o3rZ6dXEbxevEAdrFPU28vK2dNHux5',
  access_token_secret: 'WeatAwgCCEt739fZM8KFFrDK4pHchSpc19dWY1QWNnUAv'
});
  
  //client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
  //  console.log(tweets);
  //});

  router.get('/tweets', function(req, res, next) {
    // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
    client.get('statuses/user_timeline', { screen_name: 'nodejs', count: 1 }, function(error, tweets, response) {
      if (!error) {
          console.log(tweets);
        //res.status(200).render('index', { title: 'Express', tweets: tweets });
      }
      else {
        console.log(error);
        //res.status(500).json({ error: error });
      }
    });
  });

  module.exports = router;