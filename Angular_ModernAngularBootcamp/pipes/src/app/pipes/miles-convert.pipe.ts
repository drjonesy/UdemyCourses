import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miles_to',
})
export class MilesConvertPipe implements PipeTransform {
  transform(value: number, measurment: string): any {
    if (!value) {
      return '';
    }
    switch (measurment) {
      case 'km':
        return value * 1.609344;
      case 'm':
        return value * 1609.344;
      case 'cm':
        return value * 160934.4;
      default:
        throw new Error('Value not supported!');
    }
  }
}
