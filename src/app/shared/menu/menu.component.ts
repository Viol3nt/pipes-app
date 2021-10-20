import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'Texts and Dates',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-fw pi-dollar',
            routerLink: '/numbers',
          },
          {
            label: 'Uncommons',
            icon: 'pi pi-fw pi-globe',
            routerLink: '/uncommons',
          },
        ],
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-fw pi-cog',
        routerLink: '/sort',
      },
    ];
  }
}
