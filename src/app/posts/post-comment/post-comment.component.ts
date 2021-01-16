import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {
  id:any
  comments:any
  constructor(public route:ActivatedRoute, public r:Router) {
    this.id = this.route.snapshot.params.id;
    this.getComment()
   }

  ngOnInit(): void {

   this.id = this.route.snapshot.params.id;
  }

  editComment(id:any){

    this.r.navigate(["/update-comment",id])
     //this.route.navigateByUrl("/update-post/"+id)
 
   }

  getComment(){
    
    fetch('https://jsonplaceholder.typicode.com/posts/'+this.id+'/comments')
  .then((response) => response.json())
  .then((json) => {console.log(json); this.comments=json});

  }


  deleteComment(id:any){

    fetch('https://jsonplaceholder.typicode.com/comments/'+id, {
      method: 'DELETE',
    });
    console.log(id)
    alert("Comment deleted")
  }
}
