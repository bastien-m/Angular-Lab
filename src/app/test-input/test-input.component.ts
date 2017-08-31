import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styles: []
})
export class TestInputComponent implements OnInit {

  myMask = [/\d/, '-', /\d/];
  fakeValue = '';

  constructor() { }

  ngOnInit() {
  }

}
