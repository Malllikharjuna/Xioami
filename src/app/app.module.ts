import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http'
import { RealserviceService } from 'src/services/realservice.service';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RealserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
