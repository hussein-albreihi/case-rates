import { Injectable } from '@angular/core';
import { RatesResponse } from '../models/rates.model';
import { RatesStore } from '../stores/rates.store'
import { HttpClient } from '@angular/common/http';
import { RatesQuery } from '../stores/rates.query';

@Injectable({ providedIn: 'root' })
export class RatesService {
  constructor(private ratesStore: RatesStore, private httpClient: HttpClient, private ratesQuery: RatesQuery) {
  }

  fetchRates() {
    this.httpClient.get<RatesResponse>('https://api.coingecko.com/api/v3/exchange_rates').subscribe((data) => {
      this.ratesStore.SetRates(data.rates)
    })
  }  
}