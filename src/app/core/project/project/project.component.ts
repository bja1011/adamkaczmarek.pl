import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project: Project;

  constructor(private projectsService: ProjectsService,
              private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((params) => {
      this.projectsService.getProjectDetails(parseInt(params.id, 0))
        .subscribe(project => {
          console.log(project);
          this.project = project;
        });
    });
  }

  ngOnInit(): void {
  }
}
