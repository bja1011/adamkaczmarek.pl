import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Project, projectType } from '../models/project.model';
import { take } from 'rxjs/operators';
import { projectAnimations } from './projects.animations';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: projectAnimations,
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  filteredProjects: Project[];
  tags: string[];
  selectedTags: string[] = [];
  selectedTypes: projectType[] = [];
  types = projectType;

  constructor(private projectsService: ProjectsService,
  ) {
    projectsService.getProjects()
      .pipe(
        take(1)
      )
      .subscribe(projects => {
        this.projects = projects;
        this.filteredProjects = projects;
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
    this.filterProjects();
  }

  trackProjectItem(index, project: Project) {
    return project.id;
  }

  onTypeChange($event: Event, selectedType: projectType) {
    const selectedAlready = this.selectedTypes.includes(selectedType);
    if (($event.target as HTMLInputElement).checked) {
      if (!selectedAlready) {
        this.selectedTypes.push(selectedType);
      }
    } else {
      this.selectedTypes = this.selectedTypes.filter(type => type !== selectedType);
    }
    this.filterProjects();
  }

  filterProjects() {
    this.filteredProjects = this.selectedTypes.length > 0
      ? this.projects.filter(project => this.selectedTypes.includes(project.type))
      : this.projects;

    this.filteredProjects = this.selectedTags.length > 0
      ? this.filteredProjects.filter(project => project.tags.find(tag => this.selectedTags.includes(tag)))
      : this.filteredProjects;
  }
}
