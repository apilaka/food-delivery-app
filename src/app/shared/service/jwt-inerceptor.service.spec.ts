import { TestBed } from '@angular/core/testing';

import { JwtInerceptorService } from './jwt-inerceptor.service';

describe('JwtInerceptorService', () => {
  let service: JwtInerceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtInerceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
