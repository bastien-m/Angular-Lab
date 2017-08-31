import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

import { InputGenericComponent } from './input/generic/input-generic.component';
import { InputDateGenericComponent } from './input/generic/input-date-generic.component';
import { InputTextGenericComponent } from './input/generic/input-text-generic.component';
import { InputRoComponent } from './input/input-ro.component';

@NgModule({
  imports: [
    CommonModule,
    TextMaskModule
  ],
  declarations: [
    InputGenericComponent,
    InputDateGenericComponent,
    InputTextGenericComponent,
    InputRoComponent
  ],
  exports: [
    InputGenericComponent,
    TextMaskModule,
    InputDateGenericComponent,
    InputTextGenericComponent,
    InputRoComponent
  ]
})
export class SharedModule { }
