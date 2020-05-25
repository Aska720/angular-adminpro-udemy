import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor() {
    this.subscription = this.getObservable()
      .pipe(retry(2))
      .subscribe(
        console.log,
        err => console.log('Observable error:', err),
        () => console.log('Observable END'),
      );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        observer.next({counter});
        /*
        if (counter > 1) {
          // clearInterval(interval);
          if (counter === 3) {
            clearInterval(interval);
            observer.complete();
          } else if (counter === 2) {
            observer.error('MEEEEC');
          }
        }
        */
      }, 1000);
    }).pipe(
      map(response => response.counter),
      filter((value) => value % 2 === 1)
    );
  }
}
