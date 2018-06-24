import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { TicketOrderComponent } from './components/ticket-order/ticket-order.component';
import { LoginComponent } from './components/login/login.component';
import { ShowService } from './services/show.service';
import { MaterialModule } from './shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignUpComponent } from './components/sign-up/sign-up.component';

// New imports to update based on AngularFire2 version 4
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebaseconfig from './firebase-config';
import { AngularFireDatabase } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: firebaseconfig.FIREBASE_API_KEY,
  authDomain: firebaseconfig.FIREBASE_AUTH_DOMAIN,
  databaseURL: firebaseconfig.FIREBASE_DATABASE_URL,
  projectId: firebaseconfig.FIREBASE_PROJECT_ID,
  storageBucket: firebaseconfig.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: firebaseconfig.FIREBASE_MESSAGING_SENDER_ID
};

@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    ShowDetailComponent,
    TicketOrderComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  entryComponents: [
    ShowDetailComponent, 
    LoginComponent, 
    SignUpComponent ],
  providers: [ShowService, AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
