import { Component, OnInit } from '@angular/core';
import { FakeService, PostModel } from './fake.service';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/throttleTime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';
  posts: Array<PostModel>;
  postDyn: PostModel;
  numberDyn2: number;
  numberDyn: number;
  identique: boolean;
  currentSum: number;
  private postNumber: number;

  constructor(private fakeService: FakeService){}

  ngOnInit() {
    const user0: User = {userId: 1, status: STATUS.EXISTING };
    const user1: User = {userId: 2, status: STATUS.DELETED };

    if (user0.status === STATUS.EXISTING) {
      this.identique = true;
    }
    else {
      this.identique = false;
    }

    this.fakeService.test()
      .subscribe(posts => this.posts = posts);

    this.fakeService.test()
      .subscribe(posts => {
        this.postNumber = posts.reduce((acc:number, current:PostModel) => acc+=1 , 0);
      });
  }
  
  launchThrottle() {
    this.fakeService.testThrottle()
      .throttleTime(2000)
      .subscribe(number => this.numberDyn = number);
  }

  launchScan() {
    this.fakeService.testThrottle()
      .throttleTime(1000)
      .scan((acc, curr) => acc = acc + curr,0)
      .subscribe(number => this.currentSum = number)
  }

  launchCreate() {
    const obs1 = this.fakeService.createObservable();
    const obs2 = this.fakeService.createObservable();

    obs1.subscribe({next: number => this.numberDyn = number, error: null, complete: () => alert('completed') });
    obs2.subscribe(number => this.numberDyn2 = number);
  }

  get PostNumber():number { return this.postNumber; }
}

interface User {
  userId: number;
  status: STATUS;
}

enum STATUS {
  EXISTING, DELETED
}