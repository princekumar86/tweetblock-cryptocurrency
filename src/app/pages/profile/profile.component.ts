import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: User[] = [];
  
  constructor(private userService: UserService) { }
  
  ngOnInit() {
      // get users from secure api end point
      this.userService.getUsers()
          .subscribe(users => {
              this.users = users;
          });
  }

}
