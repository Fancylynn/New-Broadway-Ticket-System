import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  constructor(public dialog: MatDialog, public af: AngularFireAuth, private cdRef:ChangeDetectorRef, public snackBar: MatSnackBar) { }

  isLoggedIn: boolean = false;
  username: String = '';

  ngOnInit() {
    this.af.auth.onAuthStateChanged(user => {
      if (user) {
        this.isLoggedIn = true;
        console.log("is Logged In");
        this.username = user.displayName ? user.displayName : 'guest';
      } else {
        this.isLoggedIn = false;
        console.log("is not signed in");
      }
      this.cdRef.detectChanges();

    });

  }

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

  onUserLogout() {
    this.af.auth.signOut()
    .then(() => {
      this.openSnackBar("You have successfully logged out", "");
      // location.reload();
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
