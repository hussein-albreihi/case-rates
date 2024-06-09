import { Component, Input, OnInit, Signal, WritableSignal, inject, signal } from '@angular/core';
import { RatesQuery } from '../../stores/rates.query';
import { JsonPipe } from '@angular/common';
import { Rate } from '../../models/rates.model';

@Component({
  selector: 'app-rate',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.css'
})
export class RateComponent implements OnInit {
  @Input() id!: string;
  private store = inject(RatesQuery);
  public coin: WritableSignal<Rate | undefined> = signal(undefined);

  ngOnInit(): void {
    this.coin.update(() => this.store.getEntity(this.id));
  }
}
