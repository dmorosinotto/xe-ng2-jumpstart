import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-databind',
  template: `
    What is your name? <input [(ngModel)]="name">
    <p *ngIf="name.length>0">
      Hi, {{name}}!
    </p>
  `,
  styles: []
})
export class DatabindComponent implements OnInit {
  name: string;
  constructor() {
    this.name = '';
  }

  ngOnInit() {
  }

}
