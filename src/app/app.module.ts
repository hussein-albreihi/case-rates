import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterOutlet, Routes, provideRouter } from '@angular/router';
import { RateComponent } from './rate/rate.component';
import { BrowserModule } from '@angular/platform-browser';
import { RatesListComponent } from './rates-list/rates-list.component';
import { RatesService } from '../services/rates.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ENVIRONMENT_INITIALIZER, inject, NgZone } from '@angular/core';
import { akitaDevtools, DevtoolsOptions } from '@datorama/akita';
import { CommonModule } from '@angular/common';

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
  { path: '', component: AppComponent },
  { path: 'rate/:id', component: RateComponent, pathMatch: 'prefix' },
]

@NgModule({
  imports: [
    BrowserModule,
    RouterOutlet,
    RatesListComponent,
    CommonModule
  ],
  exports: [RatesListComponent],
  declarations: [AppComponent],
  bootstrap: [
    AppComponent
  ],
  providers: [
    RatesService,
    provideHttpClient(withFetch()),
    provideAkitaDevtools(),
    provideRouter(routes)
  ]
})
export class AppModule { }
