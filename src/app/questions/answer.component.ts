import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-answer',
  template: `
    <p>
      Q: <b>{{question}}?</b> <br />
      R: <input #resp [value]="answer"  
          (blur)="save(resp.value)"
          (keyup.enter)="save(resp.value)" 
          (keyup.esc)="resp.value=undo()" >
    </p>
  `,
  styles: []
})
export class AnswerComponent implements OnInit {
  @Input() question: string;
  @Input() answer: string;
  @Output() onResponse: EventEmitter<string>;
  constructor() {
    this.onResponse = new EventEmitter<string>();
  }

  ngOnInit() {
    this.answer = this.answer || '';
  }

  undo() {
    return this.answer || '';
  }

  save(resp: string) {
    if (resp !== this.answer) {
      this.onResponse.emit(resp);
    }
  }

}
