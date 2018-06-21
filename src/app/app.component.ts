import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  ifDetectCurrentUser: Boolean = false;

  openLoginBox() {
    const dialogRef = this.dialog.open(LoginComponent, 
      {
        width: '500px'
      });
    // dialogRef.afterClose().subsribe(result = > {console.log('abc');})
  }

  openSignUpBox() {
    const dialogRef = this.dialog.open(SignUpComponent, 
      {
        width: '500px'
      });
    // dialogRef.afterClose().subsribe(result = > {console.log('abc');})
  }
}
