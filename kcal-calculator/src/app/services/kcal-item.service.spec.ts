import { TestBed } from '@angular/core/testing';

import { KcalItemService } from './kcal-item.service';

describe('KcalItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KcalItemService = TestBed.get(KcalItemService);
    expect(service).toBeTruthy();
  });
});
