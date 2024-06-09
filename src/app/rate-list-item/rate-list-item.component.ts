import { LowerCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatListItem } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { Rate } from '../../models/rates.model';

@Component({
  selector: 'app-rate-list-item',
  standalone: true,
  imports: [MatListItem, MatDivider, RouterModule, LowerCasePipe],
  templateUrl: './rate-list-item.component.html',
  styleUrl: './rate-list-item.component.css'
})
export class RateListItemComponent {
  @Input({ alias: "rate" }) rateItem!: Rate;
}
