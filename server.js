const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var session = require('express-session');
var mongoose = require('mongoose');
var flash    = require('connect-flash');
var Twitter = require('twitter'); // for twitter REST and Stream API
var cors = require('cors');
//streamHandler = require('./utils/streamHandler');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

// require('./config/passport')(passport); // pass passport for configuration
app.use(cors());
// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
require('./config/passport')(passport); // pass passport for configuration
// routes ======================================================================
require('./node_routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// load up the user model
var User = require('./server/models/user');

// Parsers
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


// API location
app.use('/api', api);

//Twiiter api calls and settings
const t = require('./twitter');
app.use('/t', t); 

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));

// inlitialize twiiter config
var client = new Twitter({
    consumer_key: 'JKwPbCkDFUZ0FfIcfkxgkHB1Z',
    consumer_secret: 'UC6pkxzi1ne0tbhPQglEMt5wM4weg2t2aICLmqLK5nB2PZeBpi',
    access_token_key: '3249023658-l6zQYReg4o3rZ6dXEbxevEAdrFPU28vK2dNHux5',
    access_token_secret: 'WeatAwgCCEt739fZM8KFFrDK4pHchSpc19dWY1QWNnUAv'
  }); 
// Initialize socket.io
var io = require('socket.io').listen(server);

// Set a stream listener for tweets matching tracking keywords
//client.stream('statuses/filter',{ track: 'scotch_io, #scotchio'}, function(stream){
  //streamHandler(stream,io);
//});
//Create web sockets connection.
io.sockets.on('connection', function (socket) {
    
      //Code to run when socket.io is setup.
     console.log('websocket client connected');
     socket.on('message', function(msg){
      //console.log('message: ' + msg);
      io.emit('message', msg);
    });
     
});

client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
    stream.on('data', function(event) {
      console.log(event && event.text);
      //streamHandler(stream,io);
      io.emit('message', event);
    });
   
    stream.on('error', function(error) {
      throw error;
    });
});