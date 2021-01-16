import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

  posts:any
  id:any

  constructor(public route:Router,public r:ActivatedRoute) { 
   
    this.id = this.r.snapshot.params.id;
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

 fetch('https://jsonplaceholder.typicode.com/users/'+this.id+'/posts')
  .then((response) => response.json())
  .then((json) =>{this.posts=json; console.log(this.posts)});
   
  }


 
  deletePost(id:any){

    fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
      method: 'DELETE',
    });
    console.log(id)
  }

}
