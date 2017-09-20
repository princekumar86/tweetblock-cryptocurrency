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

  constructor(private _streamService:StreamtweetsService) { }

  ngOnInit() {
    this.connection = this._streamService.getTweets().subscribe(message => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
