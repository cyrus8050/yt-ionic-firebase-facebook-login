import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
// You don't need to import firebase/app either since it's being imported above
import 'firebase/auth';
import 'firebase/firestore';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fb:Facebook) {}
  login(){
    this.fb.login(['email'])
  .then((res: FacebookLoginResponse) => {
    let credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
    firebase.auth().signInWithCredential(credential).then(info=>{
      alert(JSON.stringify(info))
    })
  })
  .catch(e => console.log('Error logging into Facebook', e));
    // var provider = new firebase.auth.FacebookAuthProvider();
    // firebase.auth().signInWithRedirect(provider).then(()=>{
    //   firebase.auth().getRedirectResult().then(function(result) {
    //     alert(result)
    //   }).catch(function(error) {
    //     // Handle Errors here.
    //     alert(JSON.stringify(error))
    //     // ...
    //   });
    // })

  }
}
