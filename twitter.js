var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'JKwPbCkDFUZ0FfIcfkxgkHB1Z',
  consumer_secret: 'UC6pkxzi1ne0tbhPQglEMt5wM4weg2t2aICLmqLK5nB2PZeBpi',
  access_token_key: '3249023658-l6zQYReg4o3rZ6dXEbxevEAdrFPU28vK2dNHux5',
  access_token_secret: 'WeatAwgCCEt739fZM8KFFrDK4pHchSpc19dWY1QWNnUAv'
});

module.exports = {
    seeResults: function (req, res) {
        var query = req.url.match(/[^=]+$/)[0];
        client.get('search/tweets', {q: query}, function(error, tweets, response) {
            var status = tweets.statuses;
            res.end(JSON.stringify(status));   
        });
    }
}