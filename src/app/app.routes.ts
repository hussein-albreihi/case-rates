import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RatesListComponent } from './rates-list/rates-list.component';
import { RateComponent } from './rate/rate.component';

export const routes: Routes = [{
  component: AppComponent,
  path: "",
  children: [
    { path: "", pathMatch: "full", component: RatesListComponent },
    { path: ":id", component: RateComponent }
  ]
}];
