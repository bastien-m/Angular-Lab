import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import * as R from 'ramda';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { UserModel } from 'app/shared/models/user.model';
import { PostModel } from 'app/shared/models/post.model';

import { PostService } from './post.service';

describe('PostService', () => {

    const posts = [
        { id: 1, userId: 1, title: 'first post', body: 'content of the first post' },
        { id: 2, userId: 2, title: 'second post', body: 'content of the second post' },
        { id: 3, userId: 3, title: 'third post', body: 'content of the third post' },
        { id: 4, userId: 4, title: 'forth post', body: 'content of the forth post' }
    ];

    function fakePosts(length?: number): Observable<PostModel[]> {
        return <Observable<PostModel[]>> this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(p => R.take(length || 2, p));
    }

    let postService: PostService;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [ PostService ]
        });

        postService = TestBed.get(PostService);
        http = TestBed.get(HttpTestingController);
    });

    it('should return 1 post', (done) => {
        const firstPost: PostModel = { id: 1, userId: 1, title: 'first post', body: 'content of the first post' };
        postService.post(1)
            .subscribe( post => {
                expect(post.title).toBe(firstPost.title);
                done();
            });

        http.expectOne('https://jsonplaceholder.typicode.com/posts/1')
            .flush(firstPost);

        http.verify();
    });

    it('should return 2 posts', (async() => {
        spyOn(postService, 'posts').and.callFake(fakePosts);
        let actualPosts: PostModel[];

        postService.posts()
            .subscribe(p => actualPosts = p);

        http.expectOne('https://jsonplaceholder.typicode.com/posts')
            .flush(posts);
        expect(actualPosts.length).toBe(2);
    }));

    it('should return 3 posts', (async() => {
        let actualPosts: PostModel[];

        postService.posts(3)
            .subscribe(p => actualPosts = p);

        http.expectOne('https://jsonplaceholder.typicode.com/posts')
            .flush(posts);

        expect(actualPosts.length).toBe(3);
    }))

});
