import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  data = {cryptopreference1: 'your coin 1',
          cryptopreference2: 'your coin 2',
          cryptopreference3: 'your coin 3',
          cryptopreference4: 'your coin 4',
          cryptopreference5: 'your coin 5',
          cryptopreference6: 'your coin 6',
          };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit function called');
    this.http.post('http://localhost:8080/api/userupdatepreference/59e1b50416998f180c5c6238', this.data )
        .subscribe(
          // Successful responses call the first callback.
          data => {},
          // Errors will call this callback instead:
          err => {
            console.log('Something went wrong!');
          }
        );
  }

}
