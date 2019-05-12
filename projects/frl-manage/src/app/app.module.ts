import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FrlCommonModule } from 'frl-common';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FrlCommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
