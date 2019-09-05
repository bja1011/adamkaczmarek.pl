import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project: Project;
  imagesAlbum: Array<any> = [];

  constructor(private projectsService: ProjectsService,
              private route: ActivatedRoute,
              private lightbox: Lightbox,
  ) {
    this.route.params.subscribe((params) => {
      this.projectsService.getProjectDetails(parseInt(params.id, 0))
        .subscribe(project => {
          this.project = project;
          this.prepareImagesAlbum(project.images);
        });
    });
  }

  ngOnInit(): void {
  }

  show(index: number) {
    this.lightbox.open(this.imagesAlbum, index);
  }

  prepareImagesAlbum(images: string[]) {
    this.imagesAlbum = images.map(image => {
      return {
        src: image,
        caption: '',
        thumb: ''
      };
    });
  }
}
