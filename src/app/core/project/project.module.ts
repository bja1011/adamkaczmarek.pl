import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsService } from './services/projects.service';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbLayoutModule } from '@nebular/theme';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';

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
    NbIconModule,
    NbButtonModule,
    NbAccordionModule,
    LightboxModule,
  ],
  providers: [
    ProjectsService,
  ],
})
export class ProjectModule {
}
