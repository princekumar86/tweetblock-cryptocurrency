var mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
// load up the user model
var User = require('../../server/models/user');
var Tweet = require('../../server/models/tweet');

router.get('/userstest', (req, res) => {
    // get all the users
    User.find({}, function(err, users) {
        if (err) throw err;
    
        // object of all the users
        console.log(users);
    });
});

router.post('/user/:id', (req, res) => {
    console.log('user Id passed is :', req.params.id);

    // get a user with ID passed
    User.findById(req.params.id, function(err, user) {
        if (err) throw err;
    
        // show the one user
        console.log(user);
    });
});

router.post('/userupdatepreference/:id', (req, res) => {
    console.log('user Id passed is :', req.params.id);
    console.log('crypto preference value 1 is :', req.body.cryptopreference1);
    console.log('crypto preference value 2 is :', req.body.cryptopreference2);
    // get a user with ID passed
    User.findById(req.params.id, function(err, user) {
        if (err) throw err;
    
        user.set({ cryptopreference1: req.body.cryptopreference1,
            cryptopreference2: req.body.cryptopreference2,
            cryptopreference3: req.body.cryptopreference3,
            cryptopreference4: req.body.cryptopreference4,
            cryptopreference5: req.body.cryptopreference5,
            cryptopreference6: req.body.cryptopreference6 
        });
        user.save(function (err, updatedUser) {
          if (err) return handleError(err);
          res.send(updatedUser);
        });

    });


}); 

router.get('/userretrivepreference/:id', (req, res) => {
    console.log('user Id passed is :', req.params.id);
    // get a user with ID passed
    User.findById(req.params.id, function(err, user) {
        if (err) throw err;
        res.send(user);
    });


});

// test work for last 24 hour tweets for passed ids in post args
router.get('/last24hourtweets/:cryptoid', (req, res) => {
    // get all the tweets for this id
    Tweet.find({ "field1json.entities.user_mentions.id_str" : req.params.cryptoid })
        .sort({ "field1json.timestamp_ms" : "descending"})
        .limit(3)
        .exec(function(err, result){ 
            res.json(result);
         });
});

// This code is working reference from mongo shell or robomongo
//db.getCollection('tweets').find({ "field1json.timestamp_ms": { $gt: "1508232669089"} })
// with limit 5
//db.getCollection('tweets').find({ "field1json.timestamp_ms": { $gt: "1508232669089"} }).limit( 5 )

module.exports = router;