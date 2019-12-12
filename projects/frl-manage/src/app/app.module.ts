import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FrlCommonModule } from '@frl/common';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FrlCommonModule.forRoot(environment)],
  bootstrap: [AppComponent],
})
export class AppModule {}
