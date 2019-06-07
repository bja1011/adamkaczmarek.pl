import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project.model';
import { take } from 'rxjs/operators';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.2s ease-out', style({ opacity: '1' })),
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate('.2s ease-out', style({ opacity: '0' })),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  processedProjects: Project[];
  tags: string[];
  selectedTags: string[] = [];

  constructor(private projectsService: ProjectsService,
  ) {
    projectsService.getProjects()
      .pipe(
        take(1)
      )
      .subscribe(projects => {
        this.projects = projects;
        this.processedProjects = projects;
        this.tags = projectsService.prepareTags(projects);
      });
  }

  ngOnInit() {
  }

  onTagChange($event: Event, tagName: string) {
    const selectedAlready = this.selectedTags.includes(tagName);
    if (($event.target as HTMLInputElement).checked) {
      if (!selectedAlready) {
        this.selectedTags.push(tagName);
      }
    } else {
      this.selectedTags = this.selectedTags.filter(tag => tag !== tagName);
    }
    if (this.selectedTags.length === 0) {
      this.processedProjects = this.projects;
    } else {
      this.processedProjects = this.projects.filter(project => project.tags.find(tag => this.selectedTags.includes(tag)));
    }
  }

  trackProject(index, project: Project) {
    return project.id;
  }
}
