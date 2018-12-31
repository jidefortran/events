import { AuthServiceService } from './auth-service.service';
import { AppUser } from './../models/app-user';

import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { map} from 'rxjs/operators';
import { Observable} from 'rxjs';
import { UserServiceService } from './user-service.service';



@Injectable()
export class AdminAuthGaurdService implements CanActivate {

  constructor(private auth: AuthServiceService , private  userService: UserServiceService) { }

  canActivate(): Observable<boolean> {
    return   this.auth.appUser$.pipe(
      map(appUser => appUser.isAdmin));
  }
}
