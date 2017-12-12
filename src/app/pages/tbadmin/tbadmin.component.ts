import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tbadmin',
  templateUrl: './tbadmin.component.html',
  styleUrls: ['./tbadmin.component.css']
})
export class TbadminComponent implements OnInit {
  private Users  = []; 

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('/api/getallusers')
      .subscribe((res : any[]) => {
        console.log(res);
        this.Users = res;
    })
  }

    

}
