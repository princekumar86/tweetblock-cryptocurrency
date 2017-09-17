import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
//import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userid: string = '';
  userEmail: string = '';
  userName: string = '';
  userLoggedInAs: String = '';
  
  constructor() { }
  
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
        this.userid = parsedObject.userid;
        this.userEmail = parsedObject.email;
        this.userName = parsedObject.name;
        this.userLoggedInAs = parsedObject.loggedinas;
      }
  }

}
