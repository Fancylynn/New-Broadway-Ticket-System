import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public af: AngularFireAuth) { }

  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  ngOnInit() {
  }

  onClickSignup() {
    if (this.password === this.confirmPassword) {
      return this.af.auth.createUserWithEmailAndPassword(this.email, this.password)
              .then((user) => {
                console.log(user);
                console.log("new user created");
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
