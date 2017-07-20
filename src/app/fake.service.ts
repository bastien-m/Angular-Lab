import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/throttleTime';

@Injectable()
export class FakeService {

    constructor(private http: Http) {}

    test(): Observable<PostModel[]>{
        return this.http.get('http://jsonplaceholder.typicode.com/posts').map(res => res.json());
    }

    testThrottle(): Observable<number> {
        const posts:Array<PostModel> = [
            {userId: 1, id: 1, title: 'Title 1', body: 'body 1'},
            {userId: 2, id: 2, title: 'Title 2', body: 'body 2'},
            {userId: 3, id: 3, title: 'Title 3', body: 'body 3'}
        ]
        return Observable.interval(1000);
    }

    createObservable(): Observable<number> {
        return Observable.create(observer => {
            observer.next(1);
            setTimeout(() => observer.next(2), 2000);
            observer.next(3);
            observer.complete()
        });
    }

}

export interface PostModel {
    userId: number;
    id: number;
    title: string;
    body: string;
}