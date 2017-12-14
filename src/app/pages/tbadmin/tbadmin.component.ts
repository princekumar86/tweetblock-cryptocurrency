import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tbadmin',
  templateUrl: './tbadmin.component.html',
  styleUrls: ['./tbadmin.component.css']
})
export class TbadminComponent implements OnInit {
  private Users  = []; 
  admin_id = "";
  admin_email = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/getallusers')
      .subscribe((res : any[]) => {
        console.log(res);
        this.Users = res;
    })

    if (localStorage.getItem('currentUser') === null) {
      console.log('No local storage item'); // do nothing
    } else {
      console.log('local storage item found'); // READ STRING FROM LOCAL STORAGE
      var retrievedObject = localStorage.getItem('currentUser'); // CONVERT STRING TO REGULAR JS OBJECT
      var parsedObject = JSON.parse(retrievedObject);
      console.log(parsedObject.email);
      this.admin_email = parsedObject.email;
      console.log(parsedObject.userid._id);
      this.admin_id = parsedObject.userid._id;
      console.log(parsedObject.userid);
    }
  }

  delete(tempid) {
    if(this.admin_email=="vividapps.in@gmail.com" || this.admin_email=="C--keesvlies@gmail.com" ) {
      console.log("this id will be delete"+tempid);
      this.http.get('/api/removeusertbadmin/'+tempid)
      .subscribe((res : any[]) => {
        console.log(res);
        alert("delete process complete, reload admin to see changes");
      })
    } else {
      alert("you dont have permission to delete, contact support");
    }
  }

  edit(tempid) {
    if(this.admin_email=="vividapps.in@gmail.com" || this.admin_email=="C--keesvlies@gmail.com" ) {
      console.log("this id will be edited"+tempid);
    } else {
      alert("you dont have permission to edit, contact support");
    }
  }

    

}
