import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FakeUserService, FakePostService } from '../fake-user.service';
import { UserModel } from 'app/shared/models/user.model';
import { PostModel } from 'app/shared/models/post.model';
import { HomeComponent } from './home.component';

const firstUser: UserModel = {id: 0, firstname: 'first', lastname: 'last'};
const postReturn: Array<PostModel> = [{id: 2, userId: 1, body: 'Awesome post', title: 'Title'}];

class FakeUserStub extends FakeUserService {

  constructor(private httpC: HttpClient) {
    super(httpC);
  }

  getUser(id: number): Observable<UserModel> {
    return Observable.of(firstUser);
  }

}

describe('HomeComponent', () => {
  console.log('describe HomeComponent');
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el;
  let spyGetPostByUser: any;

  beforeEach(() => {
    const FakeUserServiceStub = {
      getUser: function(id: number) {
        return Observable.of(firstUser);
      }
    }

    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ {provide: FakeUserService, useValue: FakeUserServiceStub}, FakePostService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    const fakePostService = TestBed.get(FakePostService);
    spyGetPostByUser = spyOn(fakePostService, 'getPostByUser').and.returnValue(Observable.of([postReturn[0]]));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a h1 with firstname set to first', async(() => {
    expect(el.querySelector('h1').textContent).toBe(`Firstname: ${firstUser.firstname}`);
  }));

  it('should have run the spy', (async() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(spyGetPostByUser.calls.any()).toBe(true);
    })
  }));

  it('should return the first post with fakeAsync', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    const posts = el.querySelectorAll('.postContent');
    const contents = [].map.call(posts, post => post.textContent);
    expect(contents[0]).toBe(postReturn[0].body);
  }));

  it('should return the first post', (async() => {
    fixture.whenStable().then(() => {
      const postsContent = el.querySelector('.postContent').textContent;
      expect(postsContent).toBe(postReturn[0].body);
    });

  }));
});
