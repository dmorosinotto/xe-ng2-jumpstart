import { Component, OnInit } from '@angular/core';
import { QuestionstoreService, Question } from './index';
import { AnswerComponent } from './answer.component';

@Component({
  moduleId: module.id,
  selector: 'app-questions',
  templateUrl: 'questions.component.html',
  styleUrls: ['questions.component.css'],
  providers: [ QuestionstoreService ],
  directives: [ AnswerComponent ]
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  constructor(private svc: QuestionstoreService) {}

  ngOnInit() {
    this.questions = this.svc.getAll();
  }

  setResponse(idx: number, resp: string) {
    this.questions[idx].res = resp;
  }

}
