import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-databind',
  template: `
    What is your name? <input [(ngModel)]="name">
    <p *ngIf="name.length>0">
      Hi, {{name}}! <button (click)="clear()">X</button>
    </p>
  `,
  styles: [
    'button { color: red; border: 1px solid }'
  ]
})
export class DatabindComponent implements OnInit {
  name: string;
  constructor() {
    this.clear();
  }

  ngOnInit() {
    // this.name = 'Daniele';
  }

  clear() {
    this.name = '';
  }

}
