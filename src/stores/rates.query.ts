import { QueryEntity } from '@datorama/akita';
import { RatesState, RatesStore } from './rates.store';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RatesQuery extends QueryEntity<RatesState> {
  constructor(protected override store: RatesStore) {
    super(store);
  }
}