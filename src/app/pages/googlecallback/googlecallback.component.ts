import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SocialcallbackService } from '../../_services/socialcallback.service';

@Component({
  selector: 'app-googlecallback',
  templateUrl: './googlecallback.component.html',
  styleUrls: ['./googlecallback.component.css']
})
export class GooglecallbackComponent implements OnInit {
  public userid: string;
  public u: any;

  constructor(private router: Router, private http: Http,
              private socialcallbackService: SocialcallbackService) { }

  ngOnInit() {
    this.googlecallbackfetchdata();
  }

  googlecallbackfetchdata() {
    this.socialcallbackService.googlecallback()
        .subscribe(result => {
            if (result === true) {
                // login successful
                //this.router.navigate(['/dashboard']);
            } else {
                // login failed
                //this.error = 'Username or password is incorrect';
            }
        });
    }

}
