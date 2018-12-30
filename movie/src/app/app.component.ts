import { Component } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: 'AIzaSyAx75QItul2mOQiZpgbIljQb3nO_V0n3-s',
  authDomain: 'movie-56c7e.firebaseapp.com',
  databaseURL: 'https://movie-56c7e.firebaseio.com',
  projectId: 'movie-56c7e',
  storageBucket: 'movie-56c7e.appspot.com'
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}

