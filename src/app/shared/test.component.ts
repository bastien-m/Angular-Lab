import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-base',
    styles: [],
    template: `
        <h1>{{libelle}}</h1>
        <p>
            <div #divContent>{{content}}</div>
        </p>
    `
})
export class BaseComponent {

    @Input() libelle: string;
    @Input() content: string;

    constructor() {}

}

@Component({
    selector: 'app-child',
    styles: [],
    template: `
    `
})
export class ChildComponent {

    @Input() random: string;

}
