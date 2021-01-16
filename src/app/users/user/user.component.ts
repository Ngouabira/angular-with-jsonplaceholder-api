import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users:any
  id:any
  comments:any
 
  constructor(public route:ActivatedRoute, public r:Router) { 
   
    this.users=this.getUser()
    this.id = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
  }

  editUser(id:any){

    this.r.navigate(["/update-user",id])
 
   }

   allPost(id:any){

    this.r.navigate(["/user-post",id])
 
   }

   details(id:any){

    this.r.navigate(["/user-details",id])
 
   }
 
  getUser(){

 fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) =>{this.users=json; console.log(this.users)});
   
  }

  oneUser(){}
  addUser(u:any){
    
    fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({
  
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
  alert("user added")

  }
  updateUser(u:any){

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'PUT',
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

  deleteUser(id:any){

    fetch('https://jsonplaceholder.typicode.com/users/'+id, {
      method: 'DELETE',
    });
    console.log(id)
    alert("user deleted")
  }

  

}
