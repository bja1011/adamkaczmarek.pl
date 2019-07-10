import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    NbLayoutModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {
}
