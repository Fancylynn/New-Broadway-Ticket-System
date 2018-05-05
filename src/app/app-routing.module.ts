import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsComponent } from './components/shows/shows.component';
import { TicketOrderComponent } from './components/ticket-order/ticket-order.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'shows', component: ShowsComponent },
  { path: 'order', component: TicketOrderComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
