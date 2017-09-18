// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
    
        'facebookAuth' : {
            'clientID'      : '2028214984074649', // your App ID
            'clientSecret'  : 'b70edd289d33be7c37109a929622c8d2', // your App Secret
            'callbackURL'   : 'https://tweetblock.tk/auth/facebook/callback'
        },
    
        'twitterAuth' : {
            'consumerKey'       : 'JKwPbCkDFUZ0FfIcfkxgkHB1Z',
            'consumerSecret'    : 'UC6pkxzi1ne0tbhPQglEMt5wM4weg2t2aICLmqLK5nB2PZeBpi',
            'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
        },
    
        'googleAuth' : {
            'clientID'      : '979831058199-j0k49psb8etbjq4rna4jve88c9rts13m.apps.googleusercontent.com',
            'clientSecret'  : 'hFha5Uvcp6eVVdpITlYJgcQA',
            'callbackURL'   : 'https://tweetblock.tk/auth/google/callback'
        },
    
        'linkedinAuth' : {
            'clientID'      : '81cixqelgfbbrw',
            'clientSecret'  : 'c1m6eV0LqzWndnTG',
            'callbackURL'   : 'https://tweetblock.tk/auth/linkedin/callback'
        }
    
    };
    