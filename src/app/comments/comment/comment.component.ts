import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  id:any
  constructor(public route:ActivatedRoute, public r:Router) { 
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
  }

  addComment(c:any){

    fetch('https://jsonplaceholder.typicode.com/comments', {
  method: 'POST',
  body: JSON.stringify({
    name: c.name,
    email: c.email,  
    body: c.body,  
    postId: this.id,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) =>{ console.log(json); alert("comment added")});
  alert("Comment added")
  this.r.navigate(["/post"])

  }

}
