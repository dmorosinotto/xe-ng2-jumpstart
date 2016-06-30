/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { QuestionsComponent } from './questions.component';
import { QuestionstoreService } from './questionstore.service';
describe('Component: Questions', () => {
  it('should create an instance', () => {
    let component = new QuestionsComponent(new QuestionstoreService());
    expect(component).toBeTruthy();
  });
});
