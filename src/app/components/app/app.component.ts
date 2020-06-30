import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './models/Post';
import {Comment} from './models/Comment';


@Component({
  selector: 'app-root',
  template: `<h1>Hello</h1>
    <app-post *ngFor="let p of posts" [post]="p"></app-post>
    <app-comment *ngFor="let c of comments" [comment]="c"></app-comment>
  `,
  styles: [`h1 {background: silver}`,
      `div {
      margin: 10px;
      background-color: silver;
      border: 1px solid yellow;
    }`]
})
export class AppComponent {

  posts: any[];
  comments: any[];
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts/1/comments')
      .subscribe(data => this.posts = data);
    this.httpClient
      .get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(data => this.comments = data);
  }
}
