/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { QuestionstoreService } from './questionstore.service';

describe('Questionstore Service', () => {
  beforeEachProviders(() => [QuestionstoreService]);

  it('should ...',
      inject([QuestionstoreService], (service: QuestionstoreService) => {
    expect(service).toBeTruthy();
  }));
});
