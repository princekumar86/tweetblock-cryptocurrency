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
  crypto1 = { name: 'loading...', logourl: '', id: ''};
  crypto2 = { name: 'loading...', logourl: '', id: ''};
  crypto3 = { name: 'loading...', logourl: '', id: ''};
  crypto4 = { name: 'loading...', logourl: '', id: ''};
  crypto5 = { name: 'loading...', logourl: '', id: ''};
  crypto6 = { name: 'loading...', logourl: '', id: ''};

  @Output() sendLoggedInEvent = new EventEmitter<boolean>();

  messages = [];
  connection;
  message;
  public tweet: any;
  messages_Ethereum = []; // 2312333412
  messages_OmiseGO = []; // 831847934534746114
  messages_Ripple = []; //  1051053836
  messages_Litecoin = []; //  1393174363
  messages_NEM = []; //  2313671966
  messages_Dashpay = []; //  2338506822
  messages_iotatoken = []; //  3992601857
  messages_monerocurrency = []; //  2478439963

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
            this.crypto2.name = this.coins[0][data.cryptopreference2]['name'];
            this.crypto2.logourl = this.coins[0][data.cryptopreference2]['logourl'];
            this.crypto3.name = this.coins[0][data.cryptopreference3]['name'];
            this.crypto3.logourl = this.coins[0][data.cryptopreference3]['logourl'];
            this.crypto4.name = this.coins[0][data.cryptopreference4]['name'];
            this.crypto4.logourl = this.coins[0][data.cryptopreference4]['logourl'];
            this.crypto5.name = this.coins[0][data.cryptopreference5]['name'];
            this.crypto5.logourl = this.coins[0][data.cryptopreference5]['logourl'];
            this.crypto6.name = this.coins[0][data.cryptopreference6]['name'];
            this.crypto6.logourl = this.coins[0][data.cryptopreference6]['logourl'];

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

        switch (tempID) {
          case (2312333412):
            this.messages_Ethereum.unshift(message);
            break;
          case (831847934534746114):
            this.messages_OmiseGO.unshift(message);
            break;
          case (1051053836):
            this.messages_Ripple.unshift(message);
            break;
          case (1393174363):
            this.messages_Litecoin.unshift(message);
            break;
          case (2313671966):
            this.messages_NEM.unshift(message);
            break;
          case (2338506822):
            this.messages_Dashpay.unshift(message);
            break;
          case (3992601857):
            this.messages_iotatoken.unshift(message);
            break;
          case (2478439963):
            this.messages_monerocurrency.unshift(message);
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
