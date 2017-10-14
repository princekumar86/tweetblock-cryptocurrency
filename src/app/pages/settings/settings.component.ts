import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  userid:String = '';
  myData : any;
  prefer_update_url = '/api/userupdatepreference/'+this.userid; //example user id 59e1b50416998f180c5c6238
  prefer_retrieve_url = '/api/userretrivepreference/'+this.userid;
  crypto1:String = 'default';
  crypto2:String = 'default';
  crypto3:String = 'default';
  crypto4:String = 'default';
  crypto5:String = 'default';
  crypto6:String = 'default';

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
      if(parsedObject.userid._id) {
        this.userid = parsedObject.userid._id;
        this.prefer_update_url = '/api/userupdatepreference/'+this.userid;
        this.prefer_retrieve_url = '/api/userretrivepreference/'+this.userid;
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
            this.myData = data;
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
    console.log(this.myData);
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
