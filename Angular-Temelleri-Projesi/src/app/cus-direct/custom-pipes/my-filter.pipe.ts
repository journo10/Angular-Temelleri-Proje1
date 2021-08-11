import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFiltering',
})
export class MyFilterPipe implements PipeTransform {
  transform(value: string[], ...args: any): any {
    let result: any[] = [];
    value.forEach((element) => {
      const iHarfiVarmı = element.includes(args[0].toString());
      if (iHarfiVarmı) {
        result.push(element);
      }
    });

    return result;
  }
}
