import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { Show } from '../../models/show';
import { ShowService } from '../../services/show.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-ticket-order',
  templateUrl: './ticket-order.component.html',
  styleUrls: ['./ticket-order.component.css']
})
export class TicketOrderComponent implements OnInit {

  constructor(private showService: ShowService, 
              public af: AngularFireAuth,
              private afs: AngularFirestore,
              public dialog: MatDialog) { }

  shows: Show[];
  currentOrder: Order = {
    userid: '',
    orderName: '',
    phoneNumber: null,
    email: '',
    homeAddress: '',
    showName: '',
    showTime: '',
    quantity: null,
    delivery: '',
    payment: ''
  };


  ngOnInit() {
    this.getShows();
    this.af.auth.onAuthStateChanged(user => {
    if (user) {
      this.currentOrder.userid = user.email;
    }
  });
  }

  getShows(): void {
    this.shows = this.showService.getShows();
  }

  onSubmitOrder() {
    console.log(this.currentOrder);
    if (this.currentOrder.userid.length > 0) {
      this.afs.collection('order').add(this.currentOrder);
    } else {
      const dialogRef = this.dialog.open(LoginComponent, 
      {
        width: '500px'
      });
    }
  }
}
