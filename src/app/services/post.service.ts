import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PostModel } from 'app/shared/models/post.model';

import * as R from 'ramda';

@Injectable()
export class PostService {

    constructor(private http: HttpClient) {}

    posts(length?: number): Observable<PostModel[]> {
        return <Observable<PostModel[]>> this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(p => R.take(length || 100, p));
    }

    post(id: number): Observable<PostModel> {
        return <Observable<PostModel>> this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    }

}
