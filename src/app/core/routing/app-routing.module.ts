import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ABOUT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from './const';
import { HomeComponent } from '../home/home/home.component';

const routes: Routes = [
  {
    path: HOME_ROUTE,
    component: HomeComponent,
  },
  {
    path: PROJECTS_ROUTE,
    loadChildren: () => import('../project/project.module').then(module => module.ProjectModule)
  },
  {
    path: ABOUT_ROUTE,
    loadChildren: () => import('../about/about.module').then(module => module.AboutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
