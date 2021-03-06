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

router.get('/removeusertbadmin/:id', (req, res) => {
    console.log('user Id passed to be removed is :', req.params.id);
    // get a user with ID passed
    User.remove({ _id: req.params.id }, function(err) {
    if (!err) {
        console.log('user deleted successfully !');
        res.send({"status": "deleted successfully"});
    }
    else {
        console.log('error'+ err);
        res.send({"status": "delete error"});
    }
});


});

// load 15 tweets by default in LIVE FEED
router.get('/last24hourtweets/allcrypto', (req, res) => {
    // get all the tweets for this id
    Tweet.find({})
        .sort({ "field1json.timestamp_ms" : "descending"})
        .limit(15)
        .exec(function(err, result){ 
            res.json(result);
         });
});
// load another 15 tweets in LIVE FEED
router.get('/last24hourtweets/15/:increamentval/allcrypto', (req, res) => {
    // get all the tweets for this id
    Tweet.find({})
        .sort({ "field1json.timestamp_ms" : "descending"})
        .skip(Number(req.params.increamentval))
        .limit(15)
        .exec(function(err, result){ 
            res.json(result);
         });
});
//another test
router.get('/testtweets/:cr1tweettype/:cryptoid', (req, res) => {
    // get all the tweets for this id
    if(req.params.cryptoid == '111') { 
        //add more conditional seach in db
     } else if(req.params.cryptoid == '001'){
        //
     }
    Tweet.find({ "field1json.entities.user_mentions.id_str" : req.params.cryptoid })
        .sort({ "field1json.timestamp_ms" : "descending"})
        .limit(15)
        .exec(function(err, result){ 
            res.json(result);
         });
});
// test work for last 24 hour tweets for passed ids in post args
router.get('/last24hourtweets/:cryptoid', (req, res) => {
    // get all the tweets for this id
    Tweet.find({ "field1json.entities.user_mentions.id_str" : req.params.cryptoid })
        .sort({ "field1json.timestamp_ms" : "descending"})
        .limit(15)
        .exec(function(err, result){ 
            res.json(result);
         });
});
// another fifteen tweets, // load after 15 upto 30 tweets
router.get('/last24hourtweets/15/:increamentval/:cryptoid', (req, res) => {
    // get all the tweets for this id
    Tweet.find({ "field1json.entities.user_mentions.id_str" : req.params.cryptoid })
        .sort({ "field1json.timestamp_ms" : "descending"})
        .skip(Number(req.params.increamentval))
        .limit(15)
        .exec(function(err, result){ 
            res.json(result);
         });
});

// for tbadmin
router.get('/getallusers', (req, res) => {
    // get all the users
    User.find({}, function(err, users) {
        if (err) throw err;
    
        // object of all the users
        console.log(users);
        res.json(users);
    });
    // use below code to improve above code for limit, skip, sort etc.
    // Tweet.find({ "field1json.entities.user_mentions.id_str" : req.params.cryptoid })
    //     .sort({ "field1json.timestamp_ms" : "descending"})
    //     .skip(Number(req.params.increamentval))
    //     .limit(15)
    //     .exec(function(err, result){ 
    //         res.json(result);
    //      });
});

// for retrieving single user
router.get('/getsingleuser/:id', (req, res) => {
    console.log('user Id passed is :', req.params.id);
    // get a user with ID passed
    User.findById(req.params.id, function(err, user) {
        if (err) throw err;
        res.send(user);
    });
});

// for saving single user profile details 
router.post('/singleuserprofileupdate/:id', (req, res) => {
    console.log('user Id passed is :', req.params.id);
    console.log('userName value 1 is :', req.body.userName);
    console.log('userCountry preference value 2 is :', req.body.userCountry);
    // get a user with ID passed
    User.findById(req.params.id, function(err, user) {
        if (err) throw err;
    
        user.set({ name: req.body.userName,
            country: req.body.userCountry,
            age: req.body.userAge,
            mobile: req.body.userMobile,
            email: req.body.userEmail
        });
        user.save(function (err, updatedUser) {
          if (err) return handleError(err);
          res.send(updatedUser);
        });
    });
}); 

// This code is working reference from mongo shell or robomongo
//db.getCollection('tweets').find({ "field1json.timestamp_ms": { $gt: "1508232669089"} })
// with limit 5
//db.getCollection('tweets').find({ "field1json.timestamp_ms": { $gt: "1508232669089"} }).limit( 5 )

module.exports = router;