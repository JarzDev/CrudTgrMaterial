import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { CognitoService } from '../services/cognito.service';

export const cognitoGuardGuard: CanMatchFn = (route, state) => {
  const cognitoService = inject(CognitoService);
  return cognitoService.isAuthenticated();

};
