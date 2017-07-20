import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MenuBuilderModule } from './menu-builder/menu-builder.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { FakeService } from './fake.service';

const routes : Routes = [{
  path: 'landing', component: LandingComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    MenuBuilderModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
