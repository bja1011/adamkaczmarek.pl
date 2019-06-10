import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringArray'
})
export class StringArrayPipe implements PipeTransform {

  transform(value: string[], args?: any): any {
    return Array.isArray(value) ? value.join(', ') : null;
  }
}
