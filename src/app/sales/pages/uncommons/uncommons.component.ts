import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommons',
  templateUrl: './uncommons.component.html',
  styles: [],
})
export class UncommonsComponent {
  //i18nSelect
  name: string = 'Franco';
  gender: string = 'masculine';

  invititationMap = {
    masculine: 'invitarlo',
    feminine: 'invitarla',
  };

  //i18nPlural
  clients: string[] = [
    'Malena',
    'Franco',
    'Agustin',
    'Alfredo',
    'Silvia',
    'Cecilia',
  ];
  clientsMap = {
    '=0': 'There are no clients waiting.',
    '=1': 'We have 1 client waiting',
    other: 'We have # clients waiting',
  };

  changePerson(): void {
    this.name = 'Maria';
    this.gender = 'feminine';
  }

  deletePerson(): void {
    this.clients.pop();
  }

  //KeyValuePipe
  person = {
    name: 'Franco',
    age: 25,
    address: 'Mar del Plata, Buenos Aires, Argentina',
  };

  //JsonPipe
  heroes = [
    {
      name: 'Batman',
      flies: false,
    },
    {
      name: 'Superman',
      flies: true,
    },
    {
      name: 'Goku',
      flies: true,
    },
  ];

  //AsyncPipe
  myObservable = interval(2000); // 0, 1, 2, 3, 4, 5, etc...

  valuePromise = new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve('Promise Data');
    }, 3500);
  });
}
