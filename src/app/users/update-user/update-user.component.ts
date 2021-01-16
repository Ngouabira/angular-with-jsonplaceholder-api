import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  users:any
  id:any
  
 
  constructor(public route:ActivatedRoute, public r:Router) { 
   
   
    this.id = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
  }

  
  updateUser(u:any){

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
       
        id:this.id,
        name:u.name,
        username:u.username,
        email:u.email
    
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      alert("user updated")
      this.r.navigate(["/user"])
      

  }

  

}
