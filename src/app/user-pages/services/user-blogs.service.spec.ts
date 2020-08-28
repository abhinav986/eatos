import { TestBed } from '@angular/core/testing';

import { UserBlogsService } from './user-blogs.service';

describe('UserBlogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserBlogsService = TestBed.get(UserBlogsService);
    expect(service).toBeTruthy();
  });
});
