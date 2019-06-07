import { Injectable } from '@angular/core';
import { Project, projectType } from '../models/project.model';
import { Observable, of } from 'rxjs';

const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'San Tropico',
    type: projectType.commercial,
    description: 'Grywalizacja',
    imageUrl: '',
  },
  {
    id: 2,
    name: 'San Colombo',
    type: projectType.commercial,
    description: 'Grywalizacja',
    imageUrl: '',
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
}
