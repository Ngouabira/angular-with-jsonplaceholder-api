import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.scss']
})
export class UpdateCommentComponent implements OnInit {

  id:any

  constructor(public route:ActivatedRoute, public r:Router) {
    this.id = this.route.snapshot.params.id;
    
   }

  ngOnInit(): void {

   this.id = this.route.snapshot.params.id;
  }


  updateComment(c:any){

    fetch('https://jsonplaceholder.typicode.com/comments/'+this.id, {
  method: 'PUT',
  body: JSON.stringify({
    id: this.id,
      name: c.name,
      email: c.email,  
      body: c.body,  
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  alert("comment updated");
  this.r.navigate(["/post"]);
  }

}
