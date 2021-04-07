import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabellaComponent } from './tabella/tabella.component';
import { DataRestService } from './data-rest.service';
import { PannelloComponent } from './pannello/pannello.component';

@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent,
    PannelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
