import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { Rate, Rates } from '../models/rates.model';
import { Injectable } from '@angular/core';

export interface RatesState extends EntityState<Rate> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'rates' })
export class RatesStore extends EntityStore<RatesState, Rate> {
  constructor() {
      super();
  }

  SetRates(rates: Rates) {
    const ratesWithId: Rates = {}
    for (const [key, rate] of Object.entries(rates)) {
      ratesWithId[key] = {
        ...rate,
        id: key
      }
    }

    this.set(ratesWithId)
  }
}
