import { TestBed } from '@angular/core/testing';

import { ExamenServiceService } from './examen-service.service';

describe('ExamenServiceService', () => {
  let service: ExamenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
