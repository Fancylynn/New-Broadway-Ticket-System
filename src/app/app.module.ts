import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { TicketOrderComponent } from './components/ticket-order/ticket-order.component';
import { LoginComponent } from './components/login/login.component';
import { ShowService } from './services/show.service';


@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    ShowDetailComponent,
    TicketOrderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
