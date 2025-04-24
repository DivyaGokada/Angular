import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  countVal = signal(0)

  increament() {
    this.countVal.update(val => val + 1)
  }

  reset() {
    this.countVal.set(0)
  }

  decreament() {
    this.countVal.update(val => val - 1)
  }
}
