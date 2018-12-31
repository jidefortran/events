import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AppUser } from './../models/app-user';
import { UserServiceService } from './user-service.service';
import { Injectable } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { switchMap } from 'rxjs/operators';
import { Observable} from 'rxjs/observable';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user$: Observable<firebase.User>;

  constructor( private afAuth: AngularFireAuth, private route: ActivatedRoute, private userService: UserServiceService) {
    this.user$ = afAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(
         switchMap(user => {
            if (user) {
              return this.get (user.uid).valueChanges();
            }

           // return an Observable that emits a null value.
           return of(null);
          }));
}
}
