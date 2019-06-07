import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Observable<Project[]>;

  constructor(private projectsService: ProjectsService,
  ) {
    this.projects = projectsService.getProjects();
  }

  ngOnInit() {
  }

}
