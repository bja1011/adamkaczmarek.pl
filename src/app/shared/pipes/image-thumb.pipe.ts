import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageThumb'
})
export class ImageThumbPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.replace(/(\.[^.]+)$/, '_m$1');
  }

}
