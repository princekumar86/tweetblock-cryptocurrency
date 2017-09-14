import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

    ngOnInit() {
      // reset login status // remove localstorage or current session
      this.authenticationService.logout();
  }

  login() {
    console.log('entered login function');
    console.log(this.user.email);
    console.log(this.user.password);
      this.loading = true;
      this.authenticationService.login(this.user.email, this.user.password)
          .subscribe(result => {
              if (result === true) {
                  // login successful
                  this.router.navigate(['/dashboard']);
              } else {
                  // login failed
                  this.error = 'Username or password is incorrect';
                  this.loading = false;
              }
          });
  }

}
