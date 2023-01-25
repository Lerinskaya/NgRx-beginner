import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { increase, decrease, clear, countSelector } from './reducers/counter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  updatedAt?: number;

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <=0))

  constructor(private store: Store) {}

  increase(): void {
    this.updatedAt = Date.now()
    this.store.dispatch(increase())
  }
  decrease(): void {
    this.updatedAt = Date.now()
    this.store.dispatch(decrease())
  }
  clear(): void {
    this.updatedAt = Date.now()
    this.store.dispatch(clear())
  }
}
