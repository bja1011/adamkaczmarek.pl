import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsService } from './services/projects.service';
import { NbCardModule, NbCheckboxModule, NbLayoutModule } from '@nebular/theme';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProjectComponent, ProjectsComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NbCardModule,
    SharedModule,
    NbCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    NbLayoutModule,
  ],
  providers: [
    ProjectsService,
  ],
})
export class ProjectModule { }
