import { TestBed } from '@angular/core/testing';

import { AuthorizeGuard } from './authorize.guard';
import {BackendApiService} from "../services/backendApi.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('AuthorizeGuard', () => {
  let guard: AuthorizeGuard;

  const backendApiServiceMock= {
    doTokenExchange: jest.fn()
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {provide: BackendApiService, useValue: backendApiServiceMock},
      ]
    });
    guard = TestBed.inject(AuthorizeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
