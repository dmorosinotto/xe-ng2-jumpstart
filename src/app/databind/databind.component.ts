import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-databind',
  template: `
  <div class="box">
    What is your name? <input [(ngModel)]="name">
    <p *ngIf="name.length>0">
      Hi, {{name}}! <button (click)="clear()">X</button>
    </p>
  </div>
  `,
  styles: [
    'button { color: red; border: 1px solid }',
    '.box { border: 2px solid red; margin: 5px }'
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
