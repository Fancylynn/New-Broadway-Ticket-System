import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {MatDialogRef, MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFireAuth, public dialogRef: MatDialogRef<LoginComponent>, public snackBar: MatSnackBar) { }
  
  // email = 'test4@nyu.edu';
  // password = 'test123';

  email = '';
  password = '';

  ngOnInit() {
  }

  onClickLogin() {
    return this.af.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(({user}) => {
              // console.log(user);
              // console.log("successfully log in");
              // console.log(this.af.authState);
              this.dialogRef.close();
              this.openSnackBar("Welcome", user.displayName)
            })
            .catch((error) => {
              // console.log(error);
              alert(error.message);
            })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
