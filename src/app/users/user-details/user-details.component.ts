import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user:any
  id:any
 
  constructor(public route:ActivatedRoute, public r:Router) { 
   
    this.id = this.route.snapshot.params.id;
    this.user=this.getUser()
   

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

 fetch('https://jsonplaceholder.typicode.com/users/'+this.id)
  .then((response) => response.json())
  .then((json) =>{this.user=json; console.log(this.user)});
   
  }

 
  deleteUser(id:any){

    fetch('https://jsonplaceholder.typicode.com/users/'+id, {
      method: 'DELETE',
    });
    console.log(id)
    alert("user deleted")
    this.r.navigate(["/user"])

  }


}
