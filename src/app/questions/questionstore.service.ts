import { Injectable } from '@angular/core';

@Injectable()
export class QuestionstoreService {

  constructor() {}

  getAll() {
    return [
      {req: 'hello'},
      {req: 'what is SPA'},
      {req: 'the meaning of life'}
    ];
  }
}
