import { Component, OnInit } from '@angular/core';
import { QuestionstoreService, Question } from './index';

@Component({
  moduleId: module.id,
  selector: 'app-questions',
  templateUrl: 'questions.component.html',
  styleUrls: ['questions.component.css'],
  providers: [ QuestionstoreService ]
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  constructor(private svc: QuestionstoreService) {}

  ngOnInit() {
    this.questions = this.svc.getAll();
  }

}
