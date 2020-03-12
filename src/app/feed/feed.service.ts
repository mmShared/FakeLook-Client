import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from, forkJoin, observable, Subject } from 'rxjs';
import { post } from './Models/post.model';
import { FeedMapComponent } from './feed-map/feed-map.component';
import { dateTime } from './Models/dateTime.model';
import { users } from './Models/users.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  public post$ = new Subject<post[]>(); 
  public user$ = new Subject<users[]>();

  getAllPosts() {
    this.http.get<post[]>('http://localhost:3000/postsRoutes/posts').subscribe(res => {
      this.post$.next(res);
    });
  }

  insertPost(newPost: post) {
    this.http.post('http://localhost:3000/postsRoutes/posts',newPost).subscribe(res=>{
      this.getAllPosts();
    });
  }

  uploadeImage(formdata){
    this.http.post<any>('http://localhost:3000/postsRoutes/posts/photo',formdata).subscribe();
  }

  getAllPostsByDateTime(newDate: dateTime) {
    this.http.get<post[]>(`http://localhost:3000/postsRoutes/posts/${newDate.dateFrom}/${newDate.dateTo}`).subscribe(res=> {
      this.post$.next(res);
    });
  }

  getTagsPost(postId: number) {
    return this.http.get<any[]>(`http://localhost:3000/postsRoutes/posts/${postId}/tags`);
  }
  
  getCommentsPost(postId: number){
    return this.http.get<any[]>(`http://localhost:3000/postsRoutes/posts/${postId}/comments`);
  }

  getAllLikesPosts(postId){
    return this.http.get<any[]>(`http://localhost:3000/postsRoutes/posts/${postId}/likes`);
  }

  insertLikePost(post){
    this.http.post('http://localhost:3000/postsRoutes/posts/likes',post).subscribe();
  }

  insertCommentPost(comment) {
    this.http.post('http://localhost:3000/postsRoutes/posts/comments',comment).subscribe();
  }

  getAllPostsByTags(tag){
    this.http.get<post[]>(`http://localhost:3000/postsRoutes/post/${tag}/`).subscribe(res => {
      console.log(res)
      this.post$.next(res);
    });
  }

  getAllUsers(): Observable<users[]>{
    return this.http.get<any[]>('http://localhost:3000/usersRoutes/users/');
  }
}