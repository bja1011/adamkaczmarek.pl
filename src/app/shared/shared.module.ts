import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './pipes/safe.pipe';
import { StringArrayPipe } from './pipes/string-array.pipe';
import { ImageThumbPipe } from './pipes/image-thumb.pipe';

@NgModule({
  declarations: [
    SafePipe,
    StringArrayPipe,
    ImageThumbPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SafePipe,
    StringArrayPipe,
    ImageThumbPipe,
  ]
})
export class SharedModule {
}
