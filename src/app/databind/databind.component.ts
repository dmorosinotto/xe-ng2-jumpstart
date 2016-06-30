import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-databind',
  template: `
  <div class="box">
    What is your name? <input [(ngModel)]="name">
    <p *ngIf="name.length>0">
      Hi, {{name}}! <button (click)="clear()">X</button>
      <button (click)="goto()">GO TO</button>
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
  constructor(private router: Router) {
    this.clear();
  }

  ngOnInit() {
    // this.name = 'Daniele';
  }

  clear() {
    this.name = '';
  }

  goto() {
    // navigate to other page passing route params (:name)
    this.router.navigate(['/questions', this.name]);
  }

}
