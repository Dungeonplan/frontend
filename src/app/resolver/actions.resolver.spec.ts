import { TestBed } from '@angular/core/testing';

import { ActionsResolver } from './actions.resolver';

describe('ActionsResolver', () => {
  let resolver: ActionsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ActionsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
