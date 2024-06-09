import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Rate } from '../../models/rates.model';
import { RatesQuery } from '../../stores/rates.query';
import { MatList, MatListItem } from '@angular/material/list';
import { AsyncPipe, LowerCasePipe, NgFor } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { RateListItemComponent } from '../rate-list-item/rate-list-item.component';

@Component({
  selector: 'app-rates-list',
  templateUrl: './rates-list.component.html',
  standalone: true,
  imports: [MatList, NgFor, AsyncPipe, MatDivider, RateListItemComponent]
})
export class RatesListComponent {
  public rates$: Observable<Rate[] | undefined>;

  constructor(private ratesQuery: RatesQuery) {
    this.rates$ = this.ratesQuery.selectAll()
  }
}