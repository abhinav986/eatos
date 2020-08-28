import { TestBed } from '@angular/core/testing';

import { UserFoodConstantsService } from './user-food-constants.service';

describe('UserFoodConstantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFoodConstantsService = TestBed.get(UserFoodConstantsService);
    expect(service).toBeTruthy();
  });
});
