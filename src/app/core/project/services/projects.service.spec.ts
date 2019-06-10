import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import { MOCK_PROJECTS } from './projects.mock';

describe('ProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectsService = TestBed.get(ProjectsService);
    expect(service).toBeTruthy();
  });

  describe('get projects', () => {
    it('should return tags as array', () => {
      const service: ProjectsService = TestBed.get(ProjectsService);
      expect(service.prepareTags(MOCK_PROJECTS)).toEqual(jasmine.any(Array));
    });
  });
});