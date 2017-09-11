const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var session = require('express-session');
var mongoose = require('mongoose');

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// load up the user model
var User = require('./server/models/user');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Authentication configuration, express session
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'seventeencrypto18' 
}));

// API location
app.use('/api', api);

// Twitter login using passport
// Passport
app.use(passport.initialize());
app.use(passport.session());

// -- Twitter configure
passport.use(new TwitterStrategy({
    consumerKey: 'JKwPbCkDFUZ0FfIcfkxgkHB1Z',
    consumerSecret: 'UC6pkxzi1ne0tbhPQglEMt5wM4weg2t2aICLmqLK5nB2PZeBpi',
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, cb) {
      console.log("success");
      return cb(null, profile);
      console.log(profile.id);
    process.nextTick(function() {
            User.findOne({ 'twitter.id' : profile.id }, function(err, user) {
                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err)
                    return done(err);

                // if the user is found then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user, create them
                    var newUser                 = new User();

                    // set all of the user data that we need
                    newUser.twitter.id          = profile.id;
                    newUser.twitter.token       = token;
                    newUser.twitter.username    = profile.username;
                    newUser.twitter.displayName = profile.displayName;

                    // save our user into the database
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });

    });
  }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
// -- Twitter Authenticate requests
app.get('/auth/twitter',
passport.authenticate('twitter'));

app.get('/auth/twitter/callback', 
passport.authenticate('twitter', { failureRedirect: '/' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/dashboard');
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));