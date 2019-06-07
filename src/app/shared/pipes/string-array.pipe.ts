import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringArray'
})
export class StringArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.join(', ');
  }

}
