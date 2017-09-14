import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services/authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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

    register() {
      console.log('entered register function');
      console.log(this.user.email);
      console.log(this.user.password);
      this.loading = true;
      this.authenticationService.register(this.user.email, this.user.password)
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
