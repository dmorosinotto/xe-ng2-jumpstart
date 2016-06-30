import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-databind',
  template: `
    What is your name? <input [(ngModel)]="name">
    <p>
      {{name}}
    </p>
  `,
  styles: []
})
export class DatabindComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
