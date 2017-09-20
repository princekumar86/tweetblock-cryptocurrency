import { Component, OnInit, OnDestroy } from '@angular/core';
import { StreamtweetsService } from '../../_services/streamtweets.service';

@Component({
  selector: 'app-twiterwall',
  templateUrl: './twitterwall.component.html',
  styleUrls: ['./twitterwall.component.css']
})
export class TwitterwallComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;
  public tweet: any;

  constructor(private _streamService:StreamtweetsService) { }

  ngOnInit() {
    this.connection = this._streamService.getTweets().subscribe(message => {
      //this.messages.push(message);
      this.messages.unshift(message);
    })
    //this.connection = this._streamService.getTweets().subscribe(result => this.tweet = result);
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
