import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishReplay';

import { PostModel } from 'app/shared/models/post.model';

import * as R from 'ramda';

@Injectable()
export class PostService {
    // Cache
    postList: Observable<PostModel[]>;

    constructor(private http: HttpClient) {}

    posts(length?: number): Observable<PostModel[]> {
        if (!this.postList) {
            this.postList = <Observable<PostModel[]>> this.http.get('https://jsonplaceholder.typicode.com/posts')
                .map(p => R.take(length || 100, p))
                .do(p => console.log('fetched posts'))
                .publishReplay(1)
                .refCount();
        }
        return this.postList;
    }

    post(id: number): Observable<PostModel> {
        return <Observable<PostModel>> this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

}
