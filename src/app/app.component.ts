import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as jQuery from 'jquery';

// Import the DataService
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  // Define a users property to hold our user data
  users: Array<any>;
  userloggedIn:boolean = false;

    // Create an instance of the DataService through dependency injection
    constructor(private _dataService: DataService) {
  
      // Access the Data Service's getUsers() method we defined
      this._dataService.getUsers()
          .subscribe(res => this.users = res);
    }

    ngOnInit() {

      // jquery code for bootstrap4 hamburger navmenu closing in mobile
      jQuery('#navbarNavAltMarkup>.navbar-nav a').on('click', function(){
        jQuery('.navbar-collapse').removeClass('show');
      });

    }

    public handleLoggedInEvent(val: any):void {
      console.log('sent value is : ', val);
  }
    
    
}
