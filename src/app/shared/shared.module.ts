import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { StringArrayPipe } from './pipes/string-array.pipe';

@NgModule({
  declarations: [
    SafePipe,
    StringArrayPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SafePipe,
    StringArrayPipe,
  ]
})
export class SharedModule {
}
