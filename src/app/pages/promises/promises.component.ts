import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() {
    this.countToThree().then(msg => {
      console.log('finished: ', msg);
    }).catch(err => {
      console.log('error: ', err);
    });
  }

  ngOnInit(): void {
  }

  private countToThree(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        if (counter === 3) {
          // resolve and reject them both accept a parameter
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }
}
