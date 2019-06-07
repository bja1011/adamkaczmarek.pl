import { Injectable } from '@angular/core';
import { Project, projectType } from '../models/project.model';
import { Observable, of } from 'rxjs';

const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'San Tropico',
    type: projectType.commercial,
    description: 'Grywalizacja',
    imageUrl: 'assets/images/farm.jpg',
    tags: [
      'Angular',
      'PhaserJS',
      'Websocket'
    ]
  },
  {
    id: 2,
    name: 'San Colombo',
    type: projectType.commercial,
    description: 'Grywalizacja',
    imageUrl: 'assets/images/farm.jpg',
    tags: [
      'React',
      'BabylonJS',
      'REST'
    ]
  }
];

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
    return of(MOCK_PROJECTS);
  }

  /**
   * Prepare tags array from projects data.
   * @param projects: Projects data.
   */
  prepareTags(projects: Project[]): string[] {
    return projects.reduce((previousValue: string[], currentValue: Project) => {
      return previousValue.concat(currentValue.tags);
    }, []);
  }
}
