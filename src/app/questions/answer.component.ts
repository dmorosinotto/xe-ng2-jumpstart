import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-answer',
  template: `
    <p>
      answer works!
    </p>
  `,
  styles: []
})
export class AnswerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

}
