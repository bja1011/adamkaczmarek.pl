import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Observable, of } from 'rxjs';
import { MOCK_PROJECTS } from './projects.mock';
import { mergeMap, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[];

  constructor() {
  }

  /**
   * Return projects as observable;
   */
  getProjects(noCache?: boolean): Observable<Project[]> {
    if (!this.projects || noCache) {
      this.projects = MOCK_PROJECTS;
    }
    return of(this.projects);
  }

  getProjectDetails(projectId: number) {
    return this.getProjects()
      .pipe(
        mergeMap(projects => {
          return of(projects.find(project => project.id === projectId));
        })
      );
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
