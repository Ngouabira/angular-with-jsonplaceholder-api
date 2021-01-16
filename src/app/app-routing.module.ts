import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from './comments/comment/comment.component';
import { UpdateCommentComponent } from './comments/update-comment/update-comment.component';
import { PostCommentComponent } from './posts/post-comment/post-comment.component';
import { PostComponent } from './posts/post/post.component';
import { UpdatePostComponent } from './posts/update-post/update-post.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserPostComponent } from './users/user-post/user-post.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [

{path:'',component:PostComponent},
{path:'user',component:UserComponent},
{path:'comment-post/:id',component:CommentComponent},
{path:'post',component:PostComponent},
{path:'update-post/:id',component:UpdatePostComponent},
{path:'update-post/:id',component:UpdateUserComponent},
{path:'update-comment/:id',component:UpdateCommentComponent},
{path:'update-user/:id',component:UpdateUserComponent},
{path:'post-comment/:id',component:PostCommentComponent},
{path:'user-post/:id',component:UserPostComponent},
{path:'user-details/:id',component:UserDetailsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
