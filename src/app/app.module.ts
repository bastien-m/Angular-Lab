import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FakePostService, FakeUserService } from './fake-user.service';
import { TestInputComponent } from './test-input/test-input.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'test/input', component: TestInputComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FakeUserService, FakePostService],
  bootstrap: [AppComponent]
})
export class AppModule { }


