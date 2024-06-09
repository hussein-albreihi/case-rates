import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Rate } from '../../models/rates.model';
import { RatesQuery } from '../../stores/rates.query';
import { MatList, MatListItem } from '@angular/material/list';
import { AsyncPipe, NgFor } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-rates-list',
  templateUrl: './rates-list.component.html',
  standalone: true,
  imports: [MatList, MatListItem, NgFor, AsyncPipe, MatDivider, RouterLink]
})
export class RatesListComponent {
  rates$: Observable<Rate[]>;

  constructor(private ratesQuery: RatesQuery) {
    this.rates$ = this.ratesQuery.selectAll()
  }
}