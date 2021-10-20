import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  nameLower: string = 'fRaNco';
  nameUpper: string = 'FRANCO';
  fullName: string = 'FrAnCo SaMuDiO';

  date: Date = new Date();
}
