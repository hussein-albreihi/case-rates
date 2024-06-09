import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Rate } from '../../models/rates.model';
import { RatesQuery } from '../../stores/rates.query';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-rate',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.css'
})
export class RateComponent {
  @Input() id!: string;
  rate$: Observable<Rate | undefined>;

  constructor(private ratesQuery: RatesQuery) {
    this.rate$ = this.ratesQuery.selectEntity<Rate>(this.id)
  }
}
