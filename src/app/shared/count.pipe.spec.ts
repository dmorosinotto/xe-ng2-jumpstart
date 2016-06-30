/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CountPipe } from './count.pipe';

describe('Pipe: Count', () => {
  it('create an instance', () => {
    let pipe = new CountPipe();
    expect(pipe).toBeTruthy();
  });
});
