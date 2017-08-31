import { Component, Input, OnInit } from '@angular/core';
import { InputGenericComponent } from './input-generic.component';

@Component({
    styles: [],
    selector: 'app-input-text-generic',
    template: `
        <app-input-generic inputType="text" [textMask]="myMask" [libelle]="libelle"></app-input-generic>
    `
})
export class InputTextGenericComponent extends InputGenericComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
        super.ngOnInit();
    }

}
