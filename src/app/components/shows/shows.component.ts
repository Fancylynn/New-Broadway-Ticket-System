import { Component, OnInit } from '@angular/core';
import { Show } from '../../models/show';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  constructor(private showService: ShowService) { }

  shows: Show[];

  ngOnInit() {
    this.getShows();
  }

  getShows(): void {
    this.shows = this.showService.getShows();
  }

}
