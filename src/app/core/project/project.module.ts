import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsService } from './services/projects.service';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
  ],
  providers: [
    ProjectsService,
  ]
})
export class ProjectModule { }
