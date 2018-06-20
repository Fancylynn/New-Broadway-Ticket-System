import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { TicketOrderComponent } from './components/ticket-order/ticket-order.component';
import { LoginComponent } from './components/login/login.component';
import { ShowService } from './services/show.service';

import { MaterialModule } from './shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    ShowDetailComponent,
    TicketOrderComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [ ShowDetailComponent, LoginComponent, SignUpComponent ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
