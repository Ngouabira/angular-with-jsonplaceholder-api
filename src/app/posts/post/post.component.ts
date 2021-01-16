import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts:any
  constructor(public route:Router) { 
   
    this.posts=this.getPost()

  }

  ngOnInit(): void {
  }

  editPost(id:any){

   this.route.navigate(["/update-post",id])
    //this.route.navigateByUrl("/update-post/"+id)

  }

  allComment(id:any){

    this.route.navigate(["/post-comment",id])
     //this.route.navigateByUrl("/update-post/"+id)
 
   }

   comment(id:any){

    this.route.navigate(["/comment-post",id])
     //this.route.navigateByUrl("/post/"+id+"/comment")
 
   }

  getPost(){

 fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) =>{this.posts=json; console.log(this.posts)});
   
  }

  onePost(){}

  addPost(p:any){

    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
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

  }

 
  deletePost(id:any){

    fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
      method: 'DELETE',
    });
    console.log(id)
  }
}
