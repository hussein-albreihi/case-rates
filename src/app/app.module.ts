import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { MatList, MatListItem } from '@angular/material/list';
import { RatesListComponent } from './rates-list/rates-list.component';
import { AppComponent } from './app.component';
import { RatesService } from '../services/rates.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent }
    ]),
  ],
  exports: [
  ],
  declarations: [
  ],
  providers: [
  ]
})
export class AppModule { }