import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { StreamtweetsService } from '../../_services/streamtweets.service';
import { HttpClient } from '@angular/common/http';
import { COINS } from '../../_models/coins';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  coins = COINS;
  userEmail: string = '';
  userToken:String ='';
  UID:String = '';
  prefer_retrieve_url = '/api/userretrivepreference/'+this.UID;
  load_old_tweets_url = '/api/last24hourtweets/';
  cr1tweettype = '111';
  cr1sdmenu = ['yes', 'yes', 'yes'];
  crypto1 = { name: 'loading...', logourl: '', id: 1, handle: '', handleurl: '' };
  crypto2 = { name: 'loading...', logourl: '', id: 1, handle: '', handleurl: '' };
  crypto3 = { name: 'loading...', logourl: '', id: 1, handle: '', handleurl: '' };
  crypto4 = { name: 'loading...', logourl: '', id: 1, handle: '', handleurl: '' };
  crypto5 = { name: 'loading...', logourl: '', id: 1, handle: '', handleurl: '' };
  crypto6 = { name: 'loading...', logourl: '', id: 1, handle: '', handleurl: '' };
  crypto1_change_24h = "";
  crypto1_change_24h_type = "black";
  crypto2_change_24h = "";
  crypto2_change_24h_type = "black";
  crypto3_change_24h = "";
  crypto3_change_24h_type = "black";
  crypto4_change_24h = "";
  crypto4_change_24h_type = "black";
  crypto5_change_24h = "";
  crypto5_change_24h_type = "black";
  crypto6_change_24h = "";
  crypto6_change_24h_type = "black";

  @Output() sendLoggedInEvent = new EventEmitter<boolean>();

  messages = [];
  connection;
  message;
  public tweet: any;
  public result: any; 
  scrolled1: number = 0;
  scrolled2: number = 0;
  scrolled3: number = 0;
  scrolled4: number = 0;
  scrolled5: number = 0;
  scrolled6: number = 0;
  scrolledall: number = 0;
  messages_crypto1 = [];
  messages_crypto2 = [];
  messages_crypto3 = [];
  messages_crypto4 = [];
  messages_crypto5 = [];
  messages_crypto6 = []; 
  messages_old_crypto1 = [];
  messages_old_crypto2 = [];
  messages_old_crypto3 = [];
  messages_old_crypto4 = [];
  messages_old_crypto5 = [];
  messages_old_crypto6 = [];
  messages_old_cryptoall = [];
  messages_Ethereum = [];// 2312333412
  messages_OmiseGO = []; // 831847934534746114
  messages_Ripple = []; //  1051053836
  messages_Litecoin = []; //  1393174363
  messages_NEM = []; //  2313671966
  messages_Dashpay = []; //  2338506822
  messages_iotatoken = []; //  3992601857
  messages_monerocurrency = []; //  2478439963
  messages_LiskHQ = [];
  messages_bitcoin = [];
  messages_eth_classic = [];
  messages_NEO_Blockchain = [];
  messages_bitconnect = [];
  messages_QtumOfficial = [];
  messages_stratisplatform = [];
  messages_Tether_to = [];
  messages_zcashco = [];
  messages_wavesplatform = [];
  messages_ArkEcosystem = [];
  messages_steemit = [];
  messages_maidsafe = [];
  messages_Bytecoin_BCN = [];
  messages_golemproject = [];
  messages_EOS_io = [];
  messages_decredproject = [];
  messages_AttentionToken = [];
  messages_Veritaseuminc = [];
  messages_bitshares = [];
  messages_AugurProject = [];
  messages_tenxwallet = [];
  messages_StellarOrg = [];
  messages_KomodoPlatform = [];
  messages_Mkt_Hcash = [];
  messages__pivx = [];
  messages_NxsEarth = [];
  messages_metalpaysme = [];
  messages_factom = [];
  messages_iconominet = [];
  messages_DigixGlobal = [];
  messages_ByteballOrg = [];
  messages_SiaTechHQ = [];
  messages_civickey = [];
  messages_DigiByteCoin = [];
  messages_BitPopulous = [];
  messages_BitcoinDark = [];
  messages_gnosisPM = [];
  messages_ArdorPlatform = [];
  messages_SingularDTV = [];
  messages_gamecredits = [];
  messages_0xProject = [];
  messages_The_Blocknet = [];
  messages_dogecoin = [];
  messages_syscoin = [];
  messages_FunFairTech = [];
  messages_LykkeCity = [];
  messages_aetrnty = [];
  messages_BancorNetwork = [];
  messages_monaco_card = [];
  vergecurrency = [];
  messages_ethstatus = [];
  messages_binance_2017 = [];
  messages_gas = [];
  messages_bitdealuk = [];
  messages_edgelessproject = [];
  messages_IO_Coin = [];
  messages_NxtCommunity = [];
  messages_bitquence = [];
  messages_RiseVisionTeam = [];
  messages_ParticlProject = [];
  messages_ubiqsmart = [];
  messages_firstcoin = [];
  messages_AragonProject = [];
  messages_wingsplatform = [];
  messages_NAVCoin = [];
  
  loading1:Boolean = false;
  loading2:Boolean = false;
  loading3:Boolean = false;
  loading4:Boolean = false;
  loading5:Boolean = false;
  loading6:Boolean = false;
  loadingall:Boolean = false;

  constructor(private _streamService:StreamtweetsService, private http: HttpClient) { }

  ngOnInit() {
      if (localStorage.getItem('currentUser') === null) {
        console.log('No local storage item');
        // do nothing
      } else {
        console.log('local storage item found');
        // READ STRING FROM LOCAL STORAGE
        var retrievedObject = localStorage.getItem('currentUser');

        // CONVERT STRING TO REGULAR JS OBJECT
        var parsedObject = JSON.parse(retrievedObject);

        // ACCESS DATA
        //console.log(parsedObject.item[0].Desc);
        console.log(parsedObject.email);
        console.log(parsedObject.userid._id);
        console.log(parsedObject.userid);
        if(parsedObject.userid._id) {
          this.UID = parsedObject.userid._id;
        } else if(parsedObject.userid) {
          this.UID = parsedObject.userid;
        }
        if(this.UID !== '') {
          this.prefer_retrieve_url = '/api/userretrivepreference/'+this.UID;
          ///////////////////////////////////////////////////////////////////////////
          interface UserResponse {
            cryptopreference1: string;
            cryptopreference2: string;
            cryptopreference3: string;
            cryptopreference4: string;
            cryptopreference5: string;
            cryptopreference6: string;
          }
  
          this.http.get<UserResponse>(this.prefer_retrieve_url)
          .subscribe(
            // Successful responses call the first callback.
            data => { 
              //console.log(data)
              //console.log(data.cryptopreference1);
              //console.log(this.coins);
            this.crypto1.name = this.coins[0][data.cryptopreference1]['name']; //data.cryptopreference1;
            this.crypto1.logourl = this.coins[0][data.cryptopreference1]['logourl'];
            this.crypto1.id = this.coins[0][data.cryptopreference1]['id'];
            this.crypto1.handle = this.coins[0][data.cryptopreference1]['handle'];
            this.crypto1.handleurl = this.coins[0][data.cryptopreference1]['handleurl'];
            this.crypto2.name = this.coins[0][data.cryptopreference2]['name'];
            this.crypto2.logourl = this.coins[0][data.cryptopreference2]['logourl'];
            this.crypto2.id = this.coins[0][data.cryptopreference2]['id'];
            this.crypto2.handle = this.coins[0][data.cryptopreference2]['handle'];
            this.crypto2.handleurl = this.coins[0][data.cryptopreference2]['handleurl'];
            this.crypto3.name = this.coins[0][data.cryptopreference3]['name'];
            this.crypto3.logourl = this.coins[0][data.cryptopreference3]['logourl'];
            this.crypto3.id = this.coins[0][data.cryptopreference3]['id'];
            this.crypto3.handle = this.coins[0][data.cryptopreference3]['handle'];
            this.crypto3.handleurl = this.coins[0][data.cryptopreference3]['handleurl'];
            this.crypto4.name = this.coins[0][data.cryptopreference4]['name'];
            this.crypto4.logourl = this.coins[0][data.cryptopreference4]['logourl'];
            this.crypto4.id = this.coins[0][data.cryptopreference4]['id'];
            this.crypto4.handle = this.coins[0][data.cryptopreference4]['handle'];
            this.crypto4.handleurl = this.coins[0][data.cryptopreference4]['handleurl'];
            this.crypto5.name = this.coins[0][data.cryptopreference5]['name'];
            this.crypto5.logourl = this.coins[0][data.cryptopreference5]['logourl'];
            this.crypto5.handle = this.coins[0][data.cryptopreference5]['handle'];
            this.crypto5.handleurl = this.coins[0][data.cryptopreference5]['handleurl'];
            this.crypto5.id = this.coins[0][data.cryptopreference5]['id'];
            this.crypto6.name = this.coins[0][data.cryptopreference6]['name'];
            this.crypto6.logourl = this.coins[0][data.cryptopreference6]['logourl'];
            this.crypto6.id = this.coins[0][data.cryptopreference6]['id'];
            this.crypto6.handle = this.coins[0][data.cryptopreference6]['handle'];
            this.crypto6.handleurl = this.coins[0][data.cryptopreference6]['handleurl'];

            //console.log("this.crypto1 is "+ this.crypto1.name );
            this.loadOldTweets();
           },
            // Errors will call this callback instead:
            err => {
              console.log('Something went wrong!');
            }
          );
          //////////////////////////////////////////////////////////////////////////

          ///////////////////////////////////////////////////////////////////////////
        }
        /////////////////////////
        if(parsedObject.token) {
          this.userEmail = parsedObject.email;
          this.userToken = parsedObject.token;
        }
        // changing Login / Logout tag in top bar
        this.sendLoggedInEvent.emit(true);
      }
      ////////////////////////////////////////
      //////////////  tweet feeding code  ///
      ///////////////////////////////////////
      this.connection = this._streamService.getTweets().subscribe(message => {
        var tempText = message['text'];
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var modifiedText = tempText.replace(exp,"<a href='$1' target='_blank'>$1</a>");
        message['text'] = modifiedText;
        // remove RT from begining of the text
        var modifiedText2 = modifiedText.replace(/^(RT\s)/,"");
        message['text'] = modifiedText2;
        // All coins show in wall
        this.messages.unshift(message);
        //// other coins show in respective div 
        
        // if(message['retweeted_status']['user']['id'] == 2312333412) {
        //   this.messages_Ethereum.unshift(message);
        // }
        var tempID = 1;
          if('retweeted_status' in message){
          //console.log(message['retweeted_status']['user']['id_str']);
          //console.log('condition retweeted');
          tempID  = message['retweeted_status']['user']['id_str'];

        }else if('in_reply_to_status_id' in message) {
          // in reply to
          //console.log(message['in_reply_to_user_id_str']);
          //console.log('condition tweet reply');
          //tempID = message['in_reply_to_status_id'];
          tempID = message['in_reply_to_user_id_str'];
        } else {
          //console.log(message['user']['id_str']);
          //console.log('condition 3rd, not RT & not R, normal tweet');
          tempID  = message['user']['id_str'];
        }
        /////////////////////////////////////
        if(this.crypto1.id == tempID) {
          this.messages_crypto1.unshift(message);
        }else if(this.crypto2.id == tempID) {
          this.messages_crypto2.unshift(message);
        }else if(this.crypto3.id == tempID){
          this.messages_crypto3.unshift(message);
        }else if(this.crypto4.id == tempID){
          this.messages_crypto4.unshift(message);
        }else if(this.crypto5.id == tempID){
          this.messages_crypto5.unshift(message);
        }else if(this.crypto6.id == tempID){
          this.messages_crypto6.unshift(message);
        }
        //////////////////////////////////////
        switch (tempID) {
          case (2312333412):
            this.messages_Ethereum.unshift(message); //1
            break;
          case (831847934534746114):
            this.messages_OmiseGO.unshift(message);  //2
            break;
          case (1051053836):
            this.messages_Ripple.unshift(message);   //3
            break;
          case (1393174363):
            this.messages_Litecoin.unshift(message); //4
            break;
          case (2313671966):
            this.messages_NEM.unshift(message);      //5
            break;
          case (2338506822):
            this.messages_Dashpay.unshift(message);  //6
            break;
          case (3992601857):
            this.messages_iotatoken.unshift(message);  //7
            break;
          case (2478439963):
            this.messages_monerocurrency.unshift(message); //8
            break;
          case (4736263474):
            this.messages_LiskHQ.unshift(message);  //9
            break;
          case (357312062):
            this.messages_bitcoin.unshift(message);  //10
            break;
          case (759252279862104064):
            this.messages_eth_classic.unshift(message); //11
            break;
          case (2592325530):
            this.messages_NEO_Blockchain.unshift(message);  //12
            break;
          case (711438260354953216):
            this.messages_bitconnect.unshift(message); //13
            break;
          case (773009781644677120):
            this.messages_QtumOfficial.unshift(message); //14
            break;
          case (734688391942524928):
            this.messages_stratisplatform.unshift(message);  //15
            break;
          case (2893133450):
            this.messages_Tether_to.unshift(message);  //16
            break;
          case (4633094778):
            this.messages_zcashco.unshift(message);   //17
            break;
          case (707515829798182912):
            this.messages_wavesplatform.unshift(message);  //18
            break;
          case (1):
            this.messages_wavesplatform.unshift(message);
            break;
  
          default:
          // this.messages_Ethereum.unshift(message);
          break;
      }
          // messages_Ethereum = []; // 2312333412
          // messages_OmiseGO = []; // 831847934534746114
          // messages_Ripple = []; //  1051053836
          // messages_Litecoin = []; //  1393174363
          // messages_NEM = []; //  2313671966
          // messages_Dashpay = []; //  2338506822
          // messages_iotatoken = []; //  3992601857
          // messages_monerocurrency = []; //  2478439963

      })
      //////////////////////
      this.loadPercentChange();
      //////////////////////
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  rdo1Change(evt) {
    var target = evt.target;
    if (target.checked && target.id =="rdo-cr1-1") {
      console.log("Text only checked");
    }else if (target.checked && target.id =="rdo-cr1-2") {
      console.log("Image+Text checked");
    }
  }
  chk1Change(evt) {
    var target = evt.target;
    if (target.checked && target.id =="chk-cr1-1") {
      console.log("retweet checked");
      this.cr1sdmenu[0] = 'yes';
    }else if(target.id =="chk-cr1-1"){
      console.log("retweet unchecked");
      this.cr1sdmenu[0] = 'no';
    }
    if (target.checked && target.id =="chk-cr1-2") {
      console.log("reply checked");
      this.cr1sdmenu[1] = 'yes';
    }else if(target.id =="chk-cr1-2"){
      console.log("reply unchecked");
      this.cr1sdmenu[1] = 'no';
    }
    if (target.checked && target.id =="chk-cr1-3") {
      console.log("official checked");
      this.cr1sdmenu[2] = 'yes';
    }else if(target.id =="chk-cr1-3"){
      console.log("official unchecked");
      this.cr1sdmenu[2] = 'no';
    }
    /////////////// eight condition below
    if (this.cr1sdmenu[0] == 'yes' && this.cr1sdmenu[1] == 'yes' && this.cr1sdmenu[2] == 'yes' ) {
      this.cr1tweettype='111'; // all
    } else if (this.cr1sdmenu[0] == 'yes' && this.cr1sdmenu[1] == 'no' && this.cr1sdmenu[2] == 'no' ) {
      this.cr1tweettype='100'; // only retweets
    } else if (this.cr1sdmenu[0] == 'no' && this.cr1sdmenu[1] == 'yes' && this.cr1sdmenu[2] == 'no' ) {
      this.cr1tweettype='010'; // only replies
    } else if (this.cr1sdmenu[0] == 'no' && this.cr1sdmenu[1] == 'no' && this.cr1sdmenu[2] == 'yes' ) {
      this.cr1tweettype='001'; // only official
    } else if (this.cr1sdmenu[0] == 'yes' && this.cr1sdmenu[1] == 'yes' && this.cr1sdmenu[2] == 'no' ) {
      this.cr1tweettype='110'; // first two
    }else if (this.cr1sdmenu[0] == 'yes' && this.cr1sdmenu[1] == 'no' && this.cr1sdmenu[2] == 'yes' ) {
      this.cr1tweettype='101'; // first and last
    }else if (this.cr1sdmenu[0] == 'no' && this.cr1sdmenu[1] == 'yes' && this.cr1sdmenu[2] == 'yes' ) {
      this.cr1tweettype='011'; // last two
    }else if (this.cr1sdmenu[0] == 'no' && this.cr1sdmenu[1] == 'no' && this.cr1sdmenu[2] == 'no' ) {
      this.cr1tweettype='000'; // last two
    }
    console.log(this.cr1tweettype);
    var tempURL = '/api/testtweets/'+this.cr1tweettype+'/'+this.crypto1.id;
    this.http.get(tempURL)
    .subscribe(res => {
      this.result = res;
      this.messages_old_crypto1 = [];
      for (let res of this.result) {
        this.messages_old_crypto1.push(res.field1json);
      }
    });
  }


  loadPercentChange(){
    var tempURL = "https://api.coinmarketcap.com/v1/ticker/";
    this.http.get(tempURL)
    .subscribe(res => {
      this.result = res;
      //console.log(this.result);
      for (let res of this.result) { 
         if(res.name == this.crypto1.name) {
          this.crypto1_change_24h = res.percent_change_24h+'%';
          this.crypto1_change_24h_type = (Number(res.percent_change_24h)>0 ? "green": "red");
         }else if(res.name == this.crypto2.name) {
          this.crypto2_change_24h = res.percent_change_24h+'%';
          this.crypto2_change_24h_type = (Number(res.percent_change_24h)>0 ? "green": "red");
         }else if(res.name == this.crypto3.name) {
          this.crypto3_change_24h = res.percent_change_24h+'%';
          this.crypto3_change_24h_type = (Number(res.percent_change_24h)>0 ? "green": "red");
         }else if(res.name == this.crypto4.name) {
          this.crypto4_change_24h = res.percent_change_24h+'%';
          this.crypto4_change_24h_type = (Number(res.percent_change_24h)>0 ? "green": "red");
         }else if(res.name == this.crypto5.name) {
          this.crypto5_change_24h = res.percent_change_24h+'%';
          this.crypto5_change_24h_type = (Number(res.percent_change_24h)>0 ? "green": "red");
         }else if(res.name == this.crypto6.name) {
          this.crypto6_change_24h = res.percent_change_24h+'%';
          this.crypto6_change_24h_type = (Number(res.percent_change_24h)>0 ? "green": "red");
         }
      }
    });
  }

  loadOldTweets() {
    //console.log('entering loadOldTweets function...');
    // First box load with its old tweets
    var tempURL = this.load_old_tweets_url+this.crypto1.id;
    this.http.get(tempURL)
    .subscribe(res => {
      this.result = res;
      for (let res of this.result) {
        var tempText = res.field1json['text'];
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var modifiedText = tempText.replace(exp,"<a href='$1' target='_blank'>$1</a>");
        res.field1json['text'] = modifiedText;
        // remove RT from begining of the text
        var modifiedText2 = modifiedText.replace(/^(RT\s)/,"");
        res.field1json['text'] = modifiedText2;
        this.messages_old_crypto1.push(res.field1json);
      }
    });
    // Second box load with its old tweets
    var tempURL = this.load_old_tweets_url+this.crypto2.id;
    this.http.get(tempURL)
    .subscribe(res => {
      this.result = res; 
      for (let res of this.result) { 
        var tempText = res.field1json['text'];
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var modifiedText = tempText.replace(exp,"<a href='$1' target='_blank'>$1</a>");
        res.field1json['text'] = modifiedText;
        // remove RT from begining of the text
        var modifiedText2 = modifiedText.replace(/^(RT\s)/,"");
        res.field1json['text'] = modifiedText2;
        this.messages_old_crypto2.push(res.field1json);
      }
    });
    // Third box load with its old tweets
    var tempURL = this.load_old_tweets_url+this.crypto3.id;
    this.http.get(tempURL)
    .subscribe(res => {
      this.result = res;
      for (let res of this.result) { 
        var tempText = res.field1json['text'];
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var modifiedText = tempText.replace(exp,"<a href='$1' target='_blank'>$1</a>");
        res.field1json['text'] = modifiedText;
        // remove RT from begining of the text
        var modifiedText2 = modifiedText.replace(/^(RT\s)/,"");
        res.field1json['text'] = modifiedText2;
        this.messages_old_crypto3.push(res.field1json);
      }
    });
    // Fourth box load with its old tweets
    var tempURL = this.load_old_tweets_url+this.crypto4.id;
    this.http.get(tempURL)
    .subscribe(res => {
      this.result = res;
      for (let res of this.result) { 
        var tempText = res.field1json['text'];
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var modifiedText = tempText.replace(exp,"<a href='$1' target='_blank'>$1</a>");
        res.field1json['text'] = modifiedText;
        // remove RT from begining of the text
        var modifiedText2 = modifiedText.replace(/^(RT\s)/,"");
        res.field1json['text'] = modifiedText2;
        this.messages_old_crypto4.push(res.field1json);
      }
    });
    // Fifth box load with its old tweets
    var tempURL = this.load_old_tweets_url+this.crypto5.id;
    this.http.get(tempURL)
    .subscribe(res => {
      this.result = res;
      for (let res of this.result) { 
        var tempText = res.field1json['text'];
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var modifiedText = tempText.replace(exp,"<a href='$1' target='_blank'>$1</a>");
        res.field1json['text'] = modifiedText;
        // remove RT from begining of the text
        var modifiedText2 = modifiedText.replace(/^(RT\s)/,"");
        res.field1json['text'] = modifiedText2;
        this.messages_old_crypto5.push(res.field1json);
      }
    });
    // Sixth box load with its old tweets
    var tempURL = this.load_old_tweets_url+this.crypto6.id;
    this.http.get(tempURL)
    .subscribe(res => {
      this.result = res; 
      for (let res of this.result) { 
        var tempText = res.field1json['text'];
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var modifiedText = tempText.replace(exp,"<a href='$1' target='_blank'>$1</a>");
        res.field1json['text'] = modifiedText;
        // remove RT from begining of the text
        var modifiedText2 = modifiedText.replace(/^(RT\s)/,"");
        res.field1json['text'] = modifiedText2;
        this.messages_old_crypto6.push(res.field1json);
      }
    });
    // Live Feed box load with its old tweets
    var tempURL = this.load_old_tweets_url+'allcrypto';
    this.http.get(tempURL)
    .subscribe(res => {
      this.result = res;
      for (let res of this.result) { 
        var tempText = res.field1json['text'];
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var modifiedText = tempText.replace(exp,"<a href='$1' target='_blank'>$1</a>");
        res.field1json['text'] = modifiedText;
        // remove RT from begining of the text
        var modifiedText2 = modifiedText.replace(/^(RT\s)/,"");
        res.field1json['text'] = modifiedText2;
        this.messages_old_cryptoall.push(res.field1json);
      }
    });

  }

  onScroll1() {
    //loadanother15OldTweets
    if(this.loading1 == false) {
      this.loading1 = true;
      console.log('1 scrolled!!');
      this.scrolled1 = this.scrolled1 + 15;
      setTimeout(() => 
      {
        var tempURL = this.load_old_tweets_url+'15/'+this.scrolled1+'/'+this.crypto1.id;
        console.log(tempURL);
        this.http.get(tempURL)
        .subscribe(res => {
          this.result = res; 
          for (let res of this.result) { 
            this.messages_old_crypto1.push(res.field1json);
          }
          this.loading1 = false;
        });
      },
      4000);
    }
    //////////////////////
  }
  onScroll2() { //dashbody
    //loadanother15OldTweets
    if(this.loading2 == false) {
      this.loading2 = true;
      console.log('2 scrolled!!');
      this.scrolled2 = this.scrolled2 + 15;
      setTimeout(() => 
      {
        var tempURL = this.load_old_tweets_url+'15/'+this.scrolled2+'/'+this.crypto2.id;
        console.log(tempURL);
        this.http.get(tempURL)
        .subscribe(res => {
          this.result = res; 
          for (let res of this.result) { 
            this.messages_old_crypto2.push(res.field1json);
          }
          this.loading2 = false;
        });
      },
      4000);
    }
  }
  onScroll3() {
    //loadanother15OldTweets
    if(this.loading3 == false) {
      this.loading3 = true;
      console.log('3 scrolled!!');
      this.scrolled3 = this.scrolled3 + 15;
      setTimeout(() => 
      {
        var tempURL = this.load_old_tweets_url+'15/'+this.scrolled3+'/'+this.crypto3.id;
        console.log(tempURL);
        this.http.get(tempURL)
        .subscribe(res => {
          this.result = res; 
          for (let res of this.result) { 
            this.messages_old_crypto3.push(res.field1json);
          }
          this.loading3 = false;
        });
      },
      4000);
    }
  }
  onScroll4() { //dashbody
    //loadanother15OldTweets
    if(this.loading4 == false) {
      this.loading4 = true;
      console.log('4 scrolled!!');
      this.scrolled4 = this.scrolled4 + 15;
        setTimeout(() => 
        {
        var tempURL = this.load_old_tweets_url+'15/'+this.scrolled4+'/'+this.crypto4.id;
        console.log(tempURL);
        this.http.get(tempURL)
        .subscribe(res => {
          this.result = res; 
          for (let res of this.result) { 
            this.messages_old_crypto4.push(res.field1json);
          }
          this.loading4 = false;
        });
      },
      4000);
    } 
  }
  onScroll5() { //dashbody
    //loadanother15OldTweets
    if(this.loading5 == false) {
      this.loading5 = true;
      console.log('5 scrolled!!');
      this.scrolled5 = this.scrolled5 + 15;
        setTimeout(() => 
        {
        var tempURL = this.load_old_tweets_url+'15/'+this.scrolled5+'/'+this.crypto5.id;
        console.log(tempURL);
        this.http.get(tempURL)
        .subscribe(res => {
          this.result = res; 
          for (let res of this.result) { 
            this.messages_old_crypto5.push(res.field1json);
          }
          this.loading5 = false;
        });
      },
      4000);
    } 
  }
  onScroll6() { //dashbody
    //loadanother15OldTweets
    if(this.loading6 == false) {
      this.loading6 = true;
      console.log('6 scrolled!!');
      this.scrolled6 = this.scrolled6 + 15;
        setTimeout(() => 
        {
        var tempURL = this.load_old_tweets_url+'15/'+this.scrolled6+'/'+this.crypto6.id;
        console.log(tempURL);
        this.http.get(tempURL)
        .subscribe(res => {
          this.result = res; 
          for (let res of this.result) { 
            this.messages_old_crypto6.push(res.field1json);
          }
          this.loading6 = false;
        });
      },
      4000);
    } 
  }
  onScrollall() { //dashbody
    //loadanother15OldTweets
    if(this.loadingall == false) {
      this.loadingall = true;
      this.scrolledall = this.scrolledall + 15;
      console.log('all scrolled!!');
      setTimeout(() => 
      {
        var tempURL = this.load_old_tweets_url+'15/'+this.scrolledall+'/allcrypto';
        console.log(tempURL);
        this.http.get(tempURL)
        .subscribe(res => {
          this.result = res; 
          for (let res of this.result) { 
            this.messages_old_cryptoall.push(res.field1json);
          }
          this.loadingall = false;
        });
      },
      4000);
    }
    
  }

}
