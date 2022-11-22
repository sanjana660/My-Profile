import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  appName = "Service";
  appPurpose = "Counter";
  counter = 0;

  addCounter() {
    this.counter = this.counter + 1;
    return this.counter;
  }
  constructor() { }
}
