export interface Rate {
  id: string;
  name: string;
  unit: string;
  value: number;
  type: string;
}

export interface Rates {
  [key: string]: Rate;
}

export interface RatesResponse {
  rates: Rates;
}