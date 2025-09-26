import { TestBed } from '@angular/core/testing';

import { ServiceJson } from './service-json';

describe('ServiceJson', () => {
  let service: ServiceJson;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceJson);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
