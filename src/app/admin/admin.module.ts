import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { CmsComponent } from './cms/cms.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [UserComponent, CmsComponent]
})
export class AdminModule { }
