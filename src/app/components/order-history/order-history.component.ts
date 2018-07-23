import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Order } from '../../models/order';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  // states
  orders: any[];
  currentUser: string;
  isLoading: boolean = true;
  isOrderEmpty: boolean = false;
  isLoggedIn: boolean = false;

  constructor(public af: AngularFireAuth,
              private db: AngularFireDatabase,
              public dialog: MatDialog) {
               }

  async ngOnInit() {
    this.af.auth.onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.currentUser = user.uid;
        this.db.list(`order/${this.currentUser}`).valueChanges().subscribe(res => {
          this.isLoading = false;
          this.orders = res;
          if (this.orders.length == 0) {
            this.isOrderEmpty = true;
          } else {
            this.isOrderEmpty = false;
          }
        });
      } else {
        this.isLoggedIn = false;
      }
    })
  }

  onOpenLogin() {
    const dialogRef = this.dialog.open(LoginComponent, 
      {
        width: '500px'
    });
  }

}
