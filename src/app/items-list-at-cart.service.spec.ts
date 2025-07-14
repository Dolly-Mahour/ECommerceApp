import { TestBed } from '@angular/core/testing';

import { ItemsListAtCartService } from './items-list-at-cart.service';

describe('ItemsListAtCartService', () => {
  let service: ItemsListAtCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsListAtCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
