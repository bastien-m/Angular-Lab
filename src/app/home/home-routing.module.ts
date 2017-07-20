import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

const prefix = "home";

const routes: Routes = [
  { path: prefix + "/signin", component: SigninComponent },
  { path: prefix + "/login", component: LoginComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
