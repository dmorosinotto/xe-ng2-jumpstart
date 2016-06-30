import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  private name: string;
  constructor(private svc: QuestionstoreService, private route: ActivatedRoute) {
    // read params from route (:name) passed from databind.component
    this.name = route.snapshot.params['name'];
    // alternative way if page is reused --> use params observable!
    // route.params.subscribe( routeParams => this.name = routeParams['name'] );
  }

  ngOnInit() {
    this.svc.getAll()
        .subscribe(q => this.questions = q);
  }

  setResponse(idx: number, resp: string) {
    this.questions[idx].res = resp;
  }

}
