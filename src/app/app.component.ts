import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'fRancO samudio';
  value: number = 1000;
  obj = {
    name: 'Franco',
  };

  showName() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
}
