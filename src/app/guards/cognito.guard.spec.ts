import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cognitoGuard } from './cognito.guard';

describe('cognitoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cognitoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
