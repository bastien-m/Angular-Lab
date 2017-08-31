import { Component, Input, OnInit } from '@angular/core';

@Component({
    styles: [],
    selector: 'app-input-generic',
    template: `
        <label>{{libelle}}</label>
        <input class="form-control"
            [type]="inputType"
            [textMask]="myMask"
        />
    `
})
export class InputGenericComponent implements OnInit {

    @Input('libelle') libelle: string;
    @Input('inputType') inputType: string;
    @Input('myMask') myMask = {mask: false, showMask: false}

    objMask: any;

    constructor() {}

    ngOnInit() {
    }

}
