import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { BoutonGeneriqueDirective } from './bouton-generique.directive';

@NgModule({
  imports: [
    CommonModule,
    TextMaskModule
  ],
  declarations: [
    BoutonGeneriqueDirective
  ],
  exports: [
    TextMaskModule, BoutonGeneriqueDirective
  ]
})
export class SharedModule { }
