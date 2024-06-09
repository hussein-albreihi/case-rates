import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { Rates } from '../models/rates.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RatesState extends EntityState<Rates> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'rates' })
export class RatesStore extends EntityStore<RatesState, Rates> {
    selectAll(): Observable<Rates> {
        throw new Error("Method not implemented.");
    }
    constructor() {
        super();
    }
}