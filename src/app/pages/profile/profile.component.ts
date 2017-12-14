import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userid: string = '';
  userEmail: string = '';
  userName: string = '';
  userAge: string = '';
  userMobile: string = '';
  userCountry: String = '';
  userLoggedInAs: String = '';
  userToken: String = '';

  data = {userid: this.userid,
    userEmail: this.userEmail,
    userName: this.userName,
    userAge: this.userAge,
    userMobile: this.userMobile,
    userCountry: this.userCountry,
    };
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
      // get users details from sessionstorage or localStorage JSON and set user details
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
        console.log(parsedObject);
        this.userid = parsedObject.userid._id;
        this.userLoggedInAs = parsedObject.loggedinas;
        if(parsedObject.token) {
          this.userToken = parsedObject.token;
        }
      }

      //ajax call
      interface UserResponse {
        _id: string;
        age: string;
        name: string;
        country: string;
        email: string;
        mobile: string;
      }
      console.log('This user details are being fetched '+ this.userid);
      this.http.get<UserResponse>('/api/getsingleuser/'+this.userid)
      .subscribe(
        // Successful responses call the first callback.
        data => { 
         // this.myData = data;
          //console.log(data)
          console.log(data._id);
        this.data.userEmail = data.email;
        this.data.userName = data.name;
        this.data.userAge = data.age;
        this.data.userMobile = data.mobile;
        this.data.userCountry = data.country;
       },
        // Errors will call this callback instead:
        err => {
          console.log('Something went wrong!');
        }
      );
  }

  update_information(tempid) {
    console.log('update_information function called');
    console.log('/api/singleuserprofileupdate/'+tempid);
    console.log(this.data);
    this.http.post('/api/singleuserprofileupdate/'+tempid, this.data )
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
