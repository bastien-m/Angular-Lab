import { FakePostService, FakeUserService } from '../fake-user.service';
import { PostModel } from 'app/shared/models/post.model';
import { UserModel } from 'app/shared/models/user.model';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'ngl-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  user: Observable<UserModel>;
  posts: Observable<PostModel[]>;

  constructor(private userService: FakeUserService, private postService: FakePostService) { }

  ngOnInit() {
    this.user = this.userService.getUser(1);
    this.user.subscribe(u => this.posts = this.postService.getPostByUser(u.id));
  }


  load() {
    this.posts = this.userService.fakeMethod();
  }

}
