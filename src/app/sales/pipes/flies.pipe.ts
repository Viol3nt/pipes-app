import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flies',
})
export class FliesPipe implements PipeTransform {
  transform(flies: boolean) {
    return flies ? 'Flies' : 'Doesnt Fly';
  }
}
