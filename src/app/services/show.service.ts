import { Injectable } from '@angular/core';
import { Show } from '../models/show';
import { SHOWS } from '../mock-shows';
import { AngularFireDatabase, AngularFireList    } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class ShowService {

  constructor(private db: AngularFireDatabase) {
  }

  shows: Observable<Show[]>;

  getShows(): Observable<Show[]> {
    const response = (this.db.list('show/data')
                     .valueChanges() as Observable<Show[]>);
                    //  .subscribe(
                    //     data => {
                    //       data.forEach(element => {
                    //         console.log(element);
                    //         console.log(typeof element);
                    //         this.shows.push(element);
                    //       });
                    //     }
                    //   );
    return response;
  }
}
