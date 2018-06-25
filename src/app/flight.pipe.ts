import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fightTarget'
})
export class FlightPipe implements PipeTransform {

  transform(value: any, input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {
            return el.target.toLowerCase().indexOf(input) > -1;
        });
    }
    return value;
}
}
