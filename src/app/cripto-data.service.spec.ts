import { TestBed, inject } from '@angular/core/testing';

import { CriptoDataService } from './cripto-data.service';

describe('CriptoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CriptoDataService]
    });
  });

  it('should be created', inject([CriptoDataService], (service: CriptoDataService) => {
    expect(service).toBeTruthy();
  }));
});
