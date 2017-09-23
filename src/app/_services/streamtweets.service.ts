import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import 'rxjs/add/operator/map'

@Injectable()
export class StreamtweetsService {
  private url = 'https://tweetblock.tk/'; // 'https://tweetblock.tk/'; //'http://localhost:8080';  
  private socket;

  constructor() { }

  getTweets() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data); 
        console.log(data); 
        //console.log('reached till ng client');   
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  

} 
