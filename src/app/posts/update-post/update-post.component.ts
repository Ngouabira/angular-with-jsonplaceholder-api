import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {

  id:any
  comments:any
  constructor(public route:ActivatedRoute, public r:Router) {
    this.id = this.route.snapshot.params.id;
 
   }

  ngOnInit(): void {
  }

  updatePost(p:any){

    fetch('https://jsonplaceholder.typicode.com/posts/'+this.id, {
  method: 'PUT',
  body: JSON.stringify({
      id: this.id,
      title: p.title,
      body: p.body,  
      userId: p.userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  alert("post updated")
  this.r.navigate(["/post"]);

  }


}
