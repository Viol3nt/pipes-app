import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interface';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(heroes: Hero[], order: Boolean, orderBy: string = ''): Hero[] {
    switch (orderBy) {
      case 'name':
        if (order)
          return (heroes = heroes.sort((a, b) => (a.name > b.name ? 1 : -1)));
        return (heroes = heroes.sort((a, b) => (a.name > b.name ? -1 : 1)));
      case 'flies':
        if (order)
          return (heroes = heroes.sort((a, b) => (a.flies > b.flies ? 1 : -1)));
        return (heroes = heroes.sort((a, b) => (a.flies > b.flies ? -1 : 1)));
      case 'color':
        if (order)
          return (heroes = heroes.sort((a, b) => (a.color > b.color ? 1 : -1)));
        return (heroes = heroes.sort((a, b) => (a.color > b.color ? -1 : 1)));
      default:
        return heroes;
    }
  }
}
