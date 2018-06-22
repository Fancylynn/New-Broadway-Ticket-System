import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public af: AngularFireAuth, public dialogRef: MatDialogRef<SignUpComponent>) { }

  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  ngOnInit() {
  }

  onClickSignup() {
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword);
    if (this.password === this.confirmPassword) {
      return this.af.auth.createUserWithEmailAndPassword(this.email, this.password)
              .then((user) => {
                console.log(user);
                console.log("new user created");
                this.dialogRef.close();
                var currentUser = this.af.auth.currentUser;

                currentUser.updateProfile({
                  displayName: this.username,
                  photoURL: ""
                }).then(() => {
                  location.reload();
                })
                
                
              })
              .catch((error) => {
                console.log(error);
                alert(error.message);
                console.log("fail to create new user");
              })
    } else {
      alert("inconsisitent password");
      console.log("inconsisitent password");
    }
  }

}
