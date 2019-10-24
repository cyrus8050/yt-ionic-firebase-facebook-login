import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


import * as firebase from 'firebase/app';
// You don't need to import firebase/app either since it's being imported above
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyCtPn2bLRRXabK-DBCMyL0iDx4YVDwHfqU",
  authDomain: "facebooklogin-46b8c.firebaseapp.com",
  databaseURL: "https://facebooklogin-46b8c.firebaseio.com",
  projectId: "facebooklogin-46b8c",
  storageBucket: "facebooklogin-46b8c.appspot.com",
  messagingSenderId: "373854862482",
  appId: "1:373854862482:web:a3437315a2ea6f8c7fba4b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
