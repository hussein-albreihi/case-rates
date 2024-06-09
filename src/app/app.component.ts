import { Component } from '@angular/core';
import { RatesService } from '../services/rates.service';
import { RouterOutlet } from '@angular/router';
import { RatesListComponent } from './rates-list/rates-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [RouterOutlet, RatesListComponent]
})
export class AppComponent {
  title = 'case-rates';

  constructor(private ratesService: RatesService) {
    this.ratesService.fetchRates();
  }
}
