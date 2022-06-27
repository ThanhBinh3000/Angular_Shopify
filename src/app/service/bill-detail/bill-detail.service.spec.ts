import { TestBed } from '@angular/core/testing';

import { BillDetailService } from './bill-detail.service';

describe('BillDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillDetailService = TestBed.get(BillDetailService);
    expect(service).toBeTruthy();
  });
});
