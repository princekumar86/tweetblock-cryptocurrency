import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  arrayOfCoins = ['Ethereum', 'OmiseGO', 'Ripple', 'Litecoin', 'NEM', 'Dashpay', 'iotatoken', 'monerocurrency', 'LiskHQ', 'bitcoin', 'eth_classic', 'NEO_Blockchain', 'bitconnect', 'QtumOfficial', 'stratisplatform', 'Tether_to', 'zcashco', 'wavesplatform', 'ArkEcosystem', 'steemit', 'maidsafe', 'Bytecoin_BCN', 'golemproject', 'EOS_io', 'decredproject', 'AttentionToken', 'Veritaseuminc', 'bitshares', 'AugurProject', 'tenxwallet', 'StellarOrg', 'KomodoPlatform', 'Mkt_Hcash', '_pivx', 'NxsEarth', 'metalpaysme', 'factom', 'iconominet', 'DigixGlobal', 'ByteballOrg', 'SiaTechHQ', 'civickey', 'DigiByteCoin', 'BitPopulous', 'BitcoinDark', 'gnosisPM', 'ArdorPlatform', 'SingularDTV', 'gamecredits', '0xProject', 'The_Blocknet', 'dogecoin', 'syscoin', 'FunFairTech', 'LykkeCity', 'aetrnty', 'BancorNetwork', 'monaco_card', 'vergecurrency', 'ethstatus', 'binance_2017', 'gas', 'bitdealuk', 'edgelessproject', 'IO_Coin', 'NxtCommunity', 'bitquence', 'RiseVisionTeam', 'ParticlProject', 'ubiqsmart', 'firstcoin', 'AragonProject', 'wingsplatform', 'NAVCoin'];
  userid:String = '';
  //myData : any;
  UID:String = '';
  prefer_update_url = '/api/userupdatepreference/'+this.UID; //example user id 59e1b50416998f180c5c6238
  prefer_retrieve_url = '/api/userretrivepreference/'+this.UID;
  crypto1:String = 'Loading...';
  crypto2:String = 'Loading...';
  crypto3:String = 'Loading...';
  crypto4:String = 'Loading...';
  crypto5:String = 'Loading...';
  crypto6:String = 'Loading...';

  data = {cryptopreference1: this.crypto1,
          cryptopreference2: this.crypto2,
          cryptopreference3: this.crypto3,
          cryptopreference4: this.crypto4,
          cryptopreference5: this.crypto5,
          cryptopreference6: this.crypto6,
          };
  constructor(private http: HttpClient) { }

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
        this.userid = parsedObject.userid._id;
        this.prefer_update_url = '/api/userupdatepreference/'+this.UID;
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
           // this.myData = data;
            //console.log(data)
            console.log(data.cryptopreference1);
          this.data.cryptopreference1 = data.cryptopreference1;
          this.data.cryptopreference2 = data.cryptopreference2;
          this.data.cryptopreference3 = data.cryptopreference3;
          this.data.cryptopreference4 = data.cryptopreference4;
          this.data.cryptopreference5 = data.cryptopreference5;
          this.data.cryptopreference6 = data.cryptopreference6;
         },
          // Errors will call this callback instead:
          err => {
            console.log('Something went wrong!');
          }
        );
        //////////////////////////////////////////////////////////////////////////

      }
      
    }
  }

  onSubmit() {
    console.log('onSubmit function called');
    //console.log(this.myData);
    this.http.post(this.prefer_update_url, this.data )
        .subscribe(
          // Successful responses call the first callback.
          data => {},
          // Errors will call this callback instead:
          err => {
            console.log('Something went wrong!');
          }
        );
  }

}
