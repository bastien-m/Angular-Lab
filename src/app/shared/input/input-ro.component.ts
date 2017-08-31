import { InputTextGenericComponent } from './generic/input-text-generic.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    styles: [],
    selector: 'app-input-ro',
    template: `
       <app-input-text-generic [textMask]="{mask: maskRo, showMask: true}" ></app-input-text-generic>
    `
})
export class InputRoComponent extends InputTextGenericComponent implements OnInit {

    // maskRo = [/\d/, /\d/,  '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    maskRo = ['\d', '\d'];

    constructor() {
        super();
    }

    ngOnInit(): void {
        super.ngOnInit();
    }

}
