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
import { AngularFireDatabase }from 'angularfire2/database';

@Component({
  selector: 'app-ticket-order',
  templateUrl: './ticket-order.component.html',
  styleUrls: ['./ticket-order.component.css']
})
export class TicketOrderComponent implements OnInit {

  constructor(private showService: ShowService, 
              public af: AngularFireAuth,
              private afs: AngularFirestore,
              public dialog: MatDialog,
              private db: AngularFireDatabase) { }
  // parameters
  shows: Show[] = [];
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
  isOrderSubmitted: boolean = false;


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

  onSubmitOrder(): void {
    console.log(this.currentOrder);
    const user = this.af.auth.currentUser;
    console.log(user);
    if (user) {
      // this.afs.collection('order').add(this.currentOrder);
      this.db.list(`order/${user.uid}`).push(this.currentOrder)
        .then((res) => {
          console.log(res);
          this.isOrderSubmitted = true;
        });
    } else {
      const dialogRef = this.dialog.open(LoginComponent, 
      {
        width: '500px'
      });
    }
  }

  onClickBackToOrder(): void {
    this.isOrderSubmitted = false;
    this.currentOrder = new Order;
  }
}
