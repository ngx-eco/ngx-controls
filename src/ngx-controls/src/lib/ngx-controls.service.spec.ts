import { TestBed } from '@angular/core/testing';

import { NgxControlsService } from './ngx-controls.service';

describe('NgxControlsService', () => {
  let service: NgxControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
