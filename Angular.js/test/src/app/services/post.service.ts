import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data-service';
@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
  // private url = ;

  constructor( http: Http) {
    super('http://jsonplaceholder.typicode.com/posts',http);
   }

  // getPosts() {
  //   return this.http.get(this.url)
  // }
  // createPost(post) {
  //   return this.http.post(this.url, JSON.stringify(post));
  // }
  // updatePost(post) {
  //   return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  // }
  // deletePost(id) {
  //   // console.log(this.url + '/' + id);
  //   return this.http.delete(this.url + '/' + id);
  // }
}
