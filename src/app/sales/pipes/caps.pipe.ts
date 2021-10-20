import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caps',
})
export class CapsPipe implements PipeTransform {
  transform(value: string, toCaps: Boolean = true): string {
    return toCaps ? value.toUpperCase() : value.toLowerCase();
  }
}
