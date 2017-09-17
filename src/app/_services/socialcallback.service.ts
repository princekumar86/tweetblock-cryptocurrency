import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class SocialcallbackService {
    public userid: string;
    public user:any;
    public twitter_bearer_token:String;
 
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
                let token = user.facebook.token;
                if (userid) {
                    // if userid exists
                    // store username and id or token local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas:'facebook', token: token }));
                    sessionStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas:'facebook', token: token }));
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
                let token = user.twitter.token;
                if (userid) {
                    // if userid exists
                    // store username and id or token local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: username, userid: userid, name: name, loggedinas:'twitter', token: token }));
                    sessionStorage.setItem('currentUser', JSON.stringify({ email: username, userid: userid, name: name, loggedinas:'twitter', token: token }));
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
                let token = user.google.token;
                if (userid) {
                    // if userid exists
                    // store username and id or token local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas:'google', token: token }));
                    sessionStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas:'google', token: token }));
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