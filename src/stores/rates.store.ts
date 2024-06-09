import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { Rate, Rates } from '../models/rates.model';
import { Injectable } from '@angular/core';

export interface RatesState extends EntityState<Rates[]> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'rates' })
export class RatesStore extends EntityStore<RatesState, Rates[]> {
  constructor() {
      super();
  }

  SetRates(rates: Rates) {
    console.log("rates", rates)
    this.set([rates])
  }
}