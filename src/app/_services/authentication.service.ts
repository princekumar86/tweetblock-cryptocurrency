import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    public userid: string;
 
    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userid = currentUser;
    }
 
    login(email: string, password: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/login', JSON.stringify({ email: email, password: password }), options)
            .map((response: Response) => {
                // login successful if there's json in the response
                let userid = response.json();
                if (userid) {
                    // set userid property
                    this.userid = userid;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid }));
                    sessionStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid }));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    register(email: string, password: string): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/signup', JSON.stringify({ email: email, password: password }), options)
            .map((response: Response) => {
                // signup successful if there's a json in the response
                let userid = response.json();
                if (userid) {
                    // set userid property
                    this.userid = userid;
 
                    // store username and id in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid }));
                    sessionStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid }));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.userid = null;
        localStorage.removeItem('currentUser');
        sessionStorage.clear();
    }
}