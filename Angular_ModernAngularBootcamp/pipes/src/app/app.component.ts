import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mName: string = '';
  mDate: string = '';
  mAmount: number = 0;
  mMiles: number = 0;

  onChangeName(target: any) {
    this.mName = target.value;
  }
  onChangeDate(target: any) {
    this.mDate = target.value;
  }
  onChangeAmount(target: any) {
    this.mAmount = parseFloat(target.value);
  }
  onChangeMiles(target: any) {
    this.mMiles = parseFloat(target.value);
  }
}
