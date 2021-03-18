import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort((a, b) => new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime());
  }

}
