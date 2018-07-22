import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  // states
  orders: Observable<any[]>;
  currentUser: string;
  isLoading: true;

  constructor(public af: AngularFireAuth, private db: AngularFireDatabase) { }

  async ngOnInit() {
    await this.delay(2000);
    const user = this.af.auth.currentUser;
    // console.log(user.uid);
    this.currentUser = user.uid;
    // const uid = this.getCurrentId();
    this.orders = this.db.list(`order/${this.currentUser}`).valueChanges();
    this.orders.subscribe(res => console.log(res));
    console.log(this.orders);
  }

  private delay(ms: number): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(resolve, ms);
    })
  }

}
