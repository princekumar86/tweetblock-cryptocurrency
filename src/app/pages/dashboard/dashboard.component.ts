import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { StreamtweetsService } from '../../_services/streamtweets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  userEmail: string = '';
  userToken:String ='';
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

  constructor(private _streamService:StreamtweetsService) { }

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
        console.log(message['retweeted_status']['user']['id']);
        // if(message['retweeted_status']['user']['id'] == 2312333412) {
        //   this.messages_Ethereum.unshift(message);
        // }
        switch (message['retweeted_status']['user']['id']) {
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
