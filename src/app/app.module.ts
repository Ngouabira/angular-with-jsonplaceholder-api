import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './users/user/user.component';
import { CommentComponent } from './comments/comment/comment.component';
import { PostComponent } from './posts/post/post.component';
import { FormsModule } from '@angular/forms';
import { PostCommentComponent } from './posts/post-comment/post-comment.component';
import { UserPostComponent } from './users/user-post/user-post.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UpdatePostComponent } from './posts/update-post/update-post.component';
import { UpdateCommentComponent } from './comments/update-comment/update-comment.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CommentComponent,
    PostComponent,
    PostCommentComponent,
    UserPostComponent,
    UpdateUserComponent,
    UpdatePostComponent,
    UpdateCommentComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
