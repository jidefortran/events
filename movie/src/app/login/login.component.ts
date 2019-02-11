import { Component } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {AuthProvider, Theme} from 'ngx-auth-firebaseui';


const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: 'AIzaSyAx75QItul2mOQiZpgbIljQb3nO_V0n3-s',
  authDomain: 'movie-56c7e.firebaseapp.com',
  databaseURL: 'https://movie-56c7e.firebaseio.com',
  projectId: 'movie-56c7e',
  storageBucket: 'movie-56c7e.appspot.com'
};


@Component({
  selector: 'app-login',
  template: `<ngx-auth-firebaseui
  [providers]="[providers.Google, providers.Facebook, providers.Twitter]"
  (onSuccess)="printUser($event)" (onError)="printError()"> </ngx-auth-firebaseui>`
 // styleUrls: ['./app.component.css']
})
export class LoginComponent {
  providers = AuthProvider;
  theme = Theme;
 printUser(event) {
   console.log (event);
 }

 printError() {
   console.log(event);
 }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {

  }
}

