import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    TextMaskModule
  ],
  declarations: [
  ],
  exports: [
    TextMaskModule
  ]
})
export class SharedModule { }
