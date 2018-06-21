import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFireAuth) { }
  
  email = '';
  password = '';

  ngOnInit() {
  }

  onClickLogin() {
    console.log(this.email);
    console.log(this.password);
    return this.af.auth.signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
              console.log("successfully log in");
              console.log(this.af.authState);
            })
            .catch((error) => {
              console.log(error);
              alert(error.message);
            })
  }



}
