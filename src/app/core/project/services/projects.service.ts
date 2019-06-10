import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Observable, of } from 'rxjs';
import { MOCK_PROJECTS } from './projects.mock';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() {
  }

  /**
   * Return projects as observable;
   */
  getProjects(): Observable<Project[]> {
    return of(MOCK_PROJECTS.concat(MOCK_PROJECTS.concat(MOCK_PROJECTS)));
  }

  /**
   * Prepare tags array from projects data.
   * @param projects: Projects data.
   */
  prepareTags(projects: Project[]): string[] {
    const tags = projects.reduce((previousValue: string[], currentValue: Project) => {
      return previousValue.concat(currentValue.tags);
    }, []);
    return [...new Set(tags)];
  }
}
