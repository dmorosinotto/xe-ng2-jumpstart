import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-questions',
  templateUrl: 'questions.component.html',
  styleUrls: ['questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions;
  constructor() {}

  ngOnInit() {
    this.questions = [
      {req: 'hello'},
      {req: 'what is SPA'},
      {req: 'the meaning of life'}
    ];
  }

}
