import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MilesConvertPipe } from './pipes/miles-convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MilesConvertPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
