import { TestBed } from '@angular/core/testing';

import { NgxBinaryAngularUiService } from './ngx-binary-angular-ui.service';

describe('NgxBinaryAngularUiService', () => {
  let service: NgxBinaryAngularUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBinaryAngularUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
