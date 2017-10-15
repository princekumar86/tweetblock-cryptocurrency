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
  crypto1 = { name: 'loading...', logourl: '', id: 1 };
  crypto2 = { name: 'loading...', logourl: '', id: 1 };
  crypto3 = { name: 'loading...', logourl: '', id: 1 };
  crypto4 = { name: 'loading...', logourl: '', id: 1 };
  crypto5 = { name: 'loading...', logourl: '', id: 1 };
  crypto6 = { name: 'loading...', logourl: '', id: 1 };

  @Output() sendLoggedInEvent = new EventEmitter<boolean>();

  messages = [];
  connection;
  message;
  public tweet: any;
  messages_crypto1 = [];
  messages_crypto2 = [];
  messages_crypto3 = [];
  messages_crypto4 = [];
  messages_crypto5 = [];
  messages_crypto6 = []; 
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
              console.log(data.cryptopreference1);
              console.log(this.coins);
            this.crypto1.name = this.coins[0][data.cryptopreference1]['name']; //data.cryptopreference1;
            this.crypto1.logourl = this.coins[0][data.cryptopreference1]['logourl'];
            this.crypto1.id = this.coins[0][data.cryptopreference1]['id'];
            this.crypto2.name = this.coins[0][data.cryptopreference2]['name'];
            this.crypto2.logourl = this.coins[0][data.cryptopreference2]['logourl'];
            this.crypto2.id = this.coins[0][data.cryptopreference2]['id'];
            this.crypto3.name = this.coins[0][data.cryptopreference3]['name'];
            this.crypto3.logourl = this.coins[0][data.cryptopreference3]['logourl'];
            this.crypto3.id = this.coins[0][data.cryptopreference3]['id'];
            this.crypto4.name = this.coins[0][data.cryptopreference4]['name'];
            this.crypto4.logourl = this.coins[0][data.cryptopreference4]['logourl'];
            this.crypto4.id = this.coins[0][data.cryptopreference4]['id'];
            this.crypto5.name = this.coins[0][data.cryptopreference5]['name'];
            this.crypto5.logourl = this.coins[0][data.cryptopreference5]['logourl'];
            this.crypto6.name = this.coins[0][data.cryptopreference6]['name'];
            this.crypto6.logourl = this.coins[0][data.cryptopreference6]['logourl'];
            this.crypto6.id = this.coins[0][data.cryptopreference6]['id'];

            console.log("this.crypto1 is "+ this.crypto1.name );
           },
            // Errors will call this callback instead:
            err => {
              console.log('Something went wrong!');
            }
          );
          //////////////////////////////////////////////////////////////////////////
  
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
        // All coins show in wall
        this.messages.unshift(message);
        //// other coins show in respective div 
        
        // if(message['retweeted_status']['user']['id'] == 2312333412) {
        //   this.messages_Ethereum.unshift(message);
        // }
        var tempID = 1;
          if('retweeted_status' in message){
          //Retweeted
          console.log(message['retweeted_status']['user']['id_str']);
          console.log('condition retweeted');
          //tempID  = message['retweeted_status']['user']['id'];
          tempID  = message['retweeted_status']['user']['id_str'];

        }else if('in_reply_to_status_id' in message) {
          // in reply to
          console.log(message['in_reply_to_user_id_str']); // in_reply_to_status_id // in_reply_to_user_id 
          console.log('condition tweet reply');
          //tempID = message['in_reply_to_status_id'];
          tempID = message['in_reply_to_user_id_str'];
        } else {
          console.log(message['user']['id_str']);
          console.log('condition 3rd, not RT & not R, normal tweet');
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
      ///////////////////////////////////////
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
