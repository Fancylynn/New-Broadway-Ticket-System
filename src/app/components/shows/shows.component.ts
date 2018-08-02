import { Component, OnInit } from '@angular/core';
import { Show } from '../../models/show';
import { ShowService } from '../../services/show.service';
import { MatDialog } from '@angular/material';
import { ShowDetailComponent } from '../show-detail/show-detail.component';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  constructor(private showService: ShowService, public dialog: MatDialog) { }

  shows: Show[] = [];

  hoverShow: Show;

  ngOnInit() {
    this.getShows();
  }

  getShows(): void {
    this.showService.getShows().subscribe(
      data => {
        data.forEach(element => {
          console.log(element);
          console.log(typeof element);
          this.shows.push(element);
        });
      },
      err => console.error('Observer got an error: ' + err)
    );
    this.hoverShow = this.shows.length > 0 ? this.shows[0] : null;
  }

  onHover(show: Show): void {
    this.hoverShow = show;
    console.log(show.name);
  }

  openShowDetail() {
    const dialogRef = this.dialog.open(ShowDetailComponent, 
      {
        height: '600px', 
        data: {
          header: this.hoverShow.name,
          content: this.hoverShow.content,
          moments: this.hoverShow.moments
        }
      });
    // dialogRef.afterClose().subsribe(result = > {console.log('abc');})
  }

}



