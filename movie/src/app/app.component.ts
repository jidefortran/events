import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public auth: AuthService) {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {

  }
}

