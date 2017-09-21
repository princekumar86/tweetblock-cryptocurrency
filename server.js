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

//client.stream('statuses/filter', {follow: 'ethereum,OmiseGO,Ripple,Litecoin'}, function(stream) {
client.stream('statuses/filter', {follow: '2312333412,831847934534746114,1051053836,1393174363,2313671966,2338506822,3992601857,2478439963,4736263474,357312062,759252279862104064,2592325530,711438260354953216,773009781644677120,734688391942524928,2893133450,4633094778,707515829798182912,774791455680434176,711030662728437760,1322660676,2510084300,4053977488,862675563693125632,2349043879,841424245938769920,2571393578,503238457,2895317462,4585412124,2460502890,769457743807844352,877078771366453248,4020178512,2575764354,3111739836,2804855658,725253338640617472,2925093697,773447880564731904,3351041295,4711101020,2266631022,808032684270354433,2611894398,3448833448,744075632997470208,736586614797783040,3094365867,826699259441328128,2842476639,2235729541,119060937,871853588540248064,3741781096,760049490187386880,816646997356777472,864347902029709314,4826209539,774689518767181828,877807935493033984,877429242128023552,805450407078203392,2648931079,2243862290,862007728956485632,723270672986845184,835194759178244096,2917040642,828668619986964480,732169766450954240,2532881881'}, function(stream) {
    stream.on('data', function(event) {
      //console.log(event && event.text);
      //streamHandler(stream,io);
      io.emit('message', event);
    });
   
    stream.on('error', function(error) {
      throw error;
    });
});

/* ALT+Z for text wrap
Ethereum 2312333412
OmiseGO 831847934534746114
Ripple 1051053836
Litecoin 1393174363
NEM 2313671966
Dashpay 2338506822
iotatoken 3992601857
monerocurrency 
LiskHQ 4736263474
bitcoin 357312062
eth_classic 759252279862104064
NEO_Blockchain 2592325530
bitconnect 711438260354953216
QtumOfficial 773009781644677120
stratisplatform 734688391942524928
Tether_to 2893133450
zcashco 4633094778
wavesplatform 707515829798182912
ArkEcosystem 774791455680434176
steemit 711030662728437760
maidsafe 1322660676
Bytecoin_BCN 2510084300
golemproject 4053977488
EOS_io 862675563693125632
decredproject 2349043879
AttentionToken 841424245938769920
Veritaseuminc 2571393578
bitshares 503238457
AugurProject 2895317462
tenxwallet 4585412124
StellarOrg 2460502890
KomodoPlatform 769457743807844352
Mkt_Hcash 877078771366453248
_pivx 4020178512
NxsEarth 2575764354
metalpaysme 3111739836
factom 2804855658
iconominet 725253338640617472
DigixGlobal 2925093697
ByteballOrg 773447880564731904
SiaTechHQ 3351041295
civickey 4711101020
DigiByteCoin 2266631022
BitPopulous 808032684270354433
BitcoinDark 2611894398
gnosisPM 3448833448
ArdorPlatform 744075632997470208
SingularDTV 736586614797783040
gamecredits 3094365867
0xProject 826699259441328128
The_Blocknet 2842476639
dogecoin 2235729541
syscoin 119060937
FunFairTech 871853588540248064
LykkeCity 3741781096
aetrnty 760049490187386880
BancorNetwork 816646997356777472
monaco_card 864347902029709314
vergecurrency 4826209539
ethstatus 774689518767181828
binance_2017 877807935493033984
gas X
bitdealuk 877429242128023552
edgelessproject 805450407078203392
IO_Coin 2648931079
NxtCommunity 2243862290
bitquence 862007728956485632
RiseVisionTeam 723270672986845184
ParticlProject 835194759178244096
ubiqsmart 2917040642
firstcoin X
AragonProject 828668619986964480
wingsplatform 732169766450954240
NAVCoin 2532881881
*/