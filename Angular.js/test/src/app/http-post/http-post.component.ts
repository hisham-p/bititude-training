import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { PostService } from '../services/post.service';
import { map } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.css']
})



export class HttpPostComponent implements OnInit {
  posts: any[];

  // GET data from the server
  // constructor(private http: Http) {
  //   // http.get(this.url)
  //   //   .subscribe(response => {
  //   //     this.posts = response.json();

  //   //   });
  // }

  constructor(private service: PostService) {

  }


  // GET using OnInit interface with help of SERVICE
  ngOnInit() {
    // this.http.get(this.url)
    this.service.getAll()
      .subscribe(
        response => {
          this.posts = response.json();

        }, error => {
          alert("Unexpected error occured!");
          console.log(error);

        });

  }

  // POST method to a server

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          console.log(response.json());

        }, (error: Response) => {
          this.posts.splice(0, 1);
          if (error.status === 404) {
            // this.form.setErrors(error.json());
          }
          else {
            alert("Unexpected error occured!");
            console.log(error);
          }
        });
  }

  updatePost(post) {
    // We can either use PATCH or PUT method for update(Use as per API support)

    // PUT method for updation
    // this.http.put(this.url, JSON.stringify(post));

    // PATCH method for updation(if you are modifying only few properties) . Here we used patch instead of PUT
    this.service.update(post)
      .subscribe(
        response => {
          console.log(response.json());
        }, error => {
          alert("Unexpected error occured!");
          console.log(error);

        });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
     
    this.service.delete(post.id)
      .subscribe(
        null,
        (error: Response) => {
          // the below line roll back the changes done if an error occur in the above process
          this.posts.splice(index,0,post ); 

          if (error.status === 404) { alert("post already deleted") }
          else {
            alert("Unexpected error occured!");
            console.log(error);
          }
        });
  }



}
