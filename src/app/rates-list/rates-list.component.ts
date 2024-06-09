import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Rate } from '../../models/rates.model';
import { RatesQuery } from '../../stores/rates.query';
import { MatList, MatListItem } from '@angular/material/list';
import { AsyncPipe, LowerCasePipe, NgFor } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rates-list',
  templateUrl: './rates-list.component.html',
  standalone: true,
  imports: [MatList, MatListItem, NgFor, AsyncPipe, MatDivider, RouterModule, LowerCasePipe]
})
export class RatesListComponent {
  public rates$: Observable<Rate[] | undefined>;

  constructor(private ratesQuery: RatesQuery) {
    this.rates$ = this.ratesQuery.selectAll()
  }
}