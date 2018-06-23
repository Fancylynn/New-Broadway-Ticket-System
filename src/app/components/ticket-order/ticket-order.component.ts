import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { Show } from '../../models/show';
import { ShowService } from '../../services/show.service';
@Component({
  selector: 'app-ticket-order',
  templateUrl: './ticket-order.component.html',
  styleUrls: ['./ticket-order.component.css']
})
export class TicketOrderComponent implements OnInit {

  constructor(private showService: ShowService) { }

  shows: Show[];


  ngOnInit() {
    this.getShows();
  }

  getShows(): void {
    this.shows = this.showService.getShows();
  }
}
