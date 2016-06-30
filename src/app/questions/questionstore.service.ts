import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { Question } from './question';

@Injectable()
export class QuestionstoreService {

  constructor(private http: Http) {}

  getAll(): Observable<Question[]> {
    return this.http.get('/data/questions.json')
                .map(resp => (resp.json() as Question[]) );
  }
}
