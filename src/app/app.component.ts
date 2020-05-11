import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-calculator';
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  add() {
    this.result = this.number1 + this.number2;
  }
  subtract() {
    this.result = this.number1 - this.number2;
  }
  multiply() {
    this.result = this.number1 * this.number2;
  }
  divide() {
    this.result = this.number1 / this.number2;
  }
}
