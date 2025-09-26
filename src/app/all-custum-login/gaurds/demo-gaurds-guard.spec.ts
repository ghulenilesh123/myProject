import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { demoGaurdsGuard } from './demo-gaurds-guard';

describe('demoGaurdsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => demoGaurdsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
