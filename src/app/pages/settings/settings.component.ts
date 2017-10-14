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
  prefer_update_url = '/api/userupdatepreference/'+this.userid; //example user id 59e1b50416998f180c5c6238
  data = {cryptopreference1: 'your coin 1',
          cryptopreference2: 'your coin 2',
          cryptopreference3: 'your coin 3',
          cryptopreference4: 'your coin 4',
          cryptopreference5: 'your coin 5',
          cryptopreference6: 'your coin 6',
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
      }
    }
  }

  onSubmit() {
    console.log('onSubmit function called');
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
