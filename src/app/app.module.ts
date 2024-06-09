<<<<<<< HEAD
import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet, Routes, provideRouter } from '@angular/router';
import { RateComponent } from './rate/rate.component';
import { BrowserModule } from '@angular/platform-browser';
import { RatesListComponent } from './rates-list/rates-list.component';
import { RatesService } from '../services/rates.service';
import { provideHttpClient } from '@angular/common/http';
import { ENVIRONMENT_INITIALIZER, inject, NgZone } from '@angular/core';
import { akitaDevtools, DevtoolsOptions } from '@datorama/akita';
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
>>>>>>> 18376ae (changes O_o)

export function provideAkitaDevtools(options: Partial<DevtoolsOptions> = {}) {
  return {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory() {
      return () => {
        akitaDevtools(inject(NgZone), options);
      };
    },
  };
}

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'rate/:id', component: RateComponent },
]

@NgModule({
  imports: [
    BrowserModule,
    RouterOutlet,
    RatesListComponent,
  ],
  exports: [RatesListComponent],
  declarations: [AppComponent],
  bootstrap: [
    AppComponent
  ],
  providers: [
    RatesService,
    provideHttpClient(),
    provideAkitaDevtools(),
    provideRouter(routes)
  ]
})
export class AppModule { }
