import { TestBed } from '@angular/core/testing';

import { CourService } from './cour.service';

describe('CourService', () => {
  let service: CourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
