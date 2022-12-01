import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IRootState } from 'src/app/+store';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number> = this.store.select(rootState => rootState.counter);

  constructor(private store: Store<IRootState>) { }


  ngOnInit(): void {
  }

  increment(): void {

  }

  decrement(): void {

  }

  reset(): void {

  }

}
