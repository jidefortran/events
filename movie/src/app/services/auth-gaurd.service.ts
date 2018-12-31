import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGaurdService implements CanActivate {

  constructor(private auth: AuthServiceService , private route: Router) { }
  canActivate(route, state: RouterStateSnapshot) {

  return this.auth.user$.pipe(map(user => {
    if (user) { return true; }
   this.route.navigate(['/login'] , {queryParams : {returnUrl: state.url}} );
   return false;
 }));
   }
}
