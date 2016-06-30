import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count',
  pure: false
})
export class CountPipe implements PipeTransform {

  transform(arr: any[], fld?: string): any {
    if (!arr) { return 0; }
    if (!fld) {
      return arr.length;
    } else {
      return arr.reduce((n, i) => n + (i[fld] ? 1 : 0) , 0);
    }
  }
}
