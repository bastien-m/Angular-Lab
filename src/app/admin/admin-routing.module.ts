import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CmsComponent } from './cms/cms.component';

const prefix = "admin";

const routes: Routes = [
  { path: prefix + "/cms", component: CmsComponent },
  { path: prefix + "/user", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
