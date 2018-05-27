import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import {LoginComponent} from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  openLoginBox() {
    const dialogRef = this.dialog.open(LoginComponent, 
      {
        width: '500px'
      });
    // dialogRef.afterClose().subsribe(result = > {console.log('abc');})
  }
}
