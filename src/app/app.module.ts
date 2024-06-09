import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
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
