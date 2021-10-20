import { Component, OnInit } from '@angular/core';
import { Hero, Color } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [],
})
export class SortComponent implements OnInit {
  toCaps: Boolean = true;
  order: Boolean = true;
  fliesOrder: Boolean = true;
  colorOrder: Boolean = true;
  method: string = '';
  heroes: Hero[] = [
    {
      name: 'Batman',
      flies: false,
      color: Color.black,
    },
    {
      name: 'Goku',
      flies: true,
      color: Color.orange,
    },
    {
      name: 'Naruto',
      flies: false,
      color: Color.orange,
    },
    {
      name: 'Sonic',
      flies: false,
      color: Color.blue,
    },
    {
      name: 'Green Lantern',
      flies: true,
      color: Color.green,
    },
    {
      name: 'Superman',
      flies: true,
      color: Color.blue,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleCaps(): void {
    this.toCaps = !this.toCaps;
  }

  sortingOrder(method: string): void {
    this.method = method;
    this.order = !this.order;
  }
}
