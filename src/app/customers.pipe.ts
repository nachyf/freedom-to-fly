import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class CustomersPipe implements PipeTransform {

  transform(value: any, input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {
            return el.firstName.toLowerCase().indexOf(input) > -1;
        });
    }
    return value;
}
}
