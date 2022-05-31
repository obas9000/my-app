import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GreenTextModule } from '@libs/my-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GreenTextModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
