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

    SetRates(ratesResponse: Rates) {
      const rates: Rate[] = Object.values(ratesResponse)
      this.set(rates)
    }
}