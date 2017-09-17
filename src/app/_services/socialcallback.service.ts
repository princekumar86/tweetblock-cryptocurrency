import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class SocialcallbackService {
    public userid: string;
    public user:any;
 
    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userid = currentUser;
    }
 
    facebookcallback(): Observable<boolean> {   
        return this.http.get('/check_fb_correctly_loggenin')
            .map((response: Response) => {
                // login successful if there's json in the response
                let user = response.json();
                console.log(user);
                let userid = user._id;
                let email = user.facebook.email;
                let name = user.facebook.name;
                if (userid) {
                    // if userid exists
                    // store username and id or token local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas:'facebook' }));
                    sessionStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas:'facebook' }));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    twittercallback(): Observable<boolean> {   
        return this.http.get('/check_twitter_correctly_loggenin')
            .map((response: Response) => {
                // login successful if there's json in the response
                let user = response.json();
                console.log(user);
                let userid = user._id;
                let username = user.twitter.username;
                let name = user.twitter.displayName;
                if (userid) {
                    // if userid exists
                    // store username and id or token local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: username, userid: userid, name: name, loggedinas:'twitter' }));
                    sessionStorage.setItem('currentUser', JSON.stringify({ email: username, userid: userid, name: name, loggedinas:'twitter' }));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    googlecallback(): Observable<boolean> {
        return this.http.get('/check_google_correctly_loggenin')
            .map((response: Response) => {
                // login successful if there's json in the response
                let user = response.json();
                console.log(user);
                let userid = user._id;
                let email = user.google.email;
                let name = user.google.name;
                if (userid) {
                    // if userid exists
                    // store username and id or token local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas:'google' }));
                    sessionStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas:'google' }));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    linkedincallback(): Observable<boolean> {
        return this.http.get('/check_linkedin_correctly_loggenin')
            .map((response: Response) => {
                // login successful if there's json in the response
                let user = response.json();
                console.log(user);
                let userid = user._id;
                let email = user.linkedin.email;
                let name = user.linkedin.name;
                if (userid) {
                    // if userid exists
                    // store username and id or token local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas:'linkedin' }));
                    sessionStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas:'linkedin' }));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }
 

}