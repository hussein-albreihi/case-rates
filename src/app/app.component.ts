import { Component } from '@angular/core';
import { RatesService } from '../services/rates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  title = 'case-rates';

  constructor(private ratesService: RatesService) {
    this.ratesService.fetchRates();
  }
}
