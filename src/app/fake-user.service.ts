import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/find';
import 'rxjs/add/observable/of';

export interface UserModel {
    id: number;
    firstname: string;
    lastname: string;
}

export interface PostModel {
    id: number;
    userId: number;
    body: string;
    title?: string;
}


@Injectable()
export class FakeUserService {

  private users: Array<UserModel> = [
    { id: 0, firstname: 'first0', lastname: 'last0' },
    { id: 1, firstname: 'first1', lastname: 'last1' }
  ];

  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<UserModel> {
    return Observable.from(this.users).find(u => u.id === id);
  }

  fakeMethod(): Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}


@Injectable()
export class FakePostService {

    private posts: Array<PostModel> = [
        { id: 0, userId: 1, body: 'Content of first post' },
        { id: 1, userId: 1, body: 'Second post'}
    ];

    getPostByUser(id: number): Observable<PostModel[]> {
        return Observable.of(this.posts.filter(x => x.userId === id));
    }
}
