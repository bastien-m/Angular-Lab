import { Component, Input } from '@angular/core';

@Component({
    styles: [],
    selector: 'app-input-date-generic',
    template: `
        <label>{{libelle}}</label>
    `
})
export class InputDateGenericComponent {

    @Input('libelle') libelle: string;

}
