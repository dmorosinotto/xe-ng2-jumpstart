import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable()
export class QuestionstoreService {

  constructor() {}

  getAll(): Question[] {
    return [
      {req: 'hello'},
      {req: 'what is SPA'},
      {req: 'the meaning of life'}
    ];
  }
}
