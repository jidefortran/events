import { AppUser } from './../models/app-user';
import { AuthServiceService } from './../services/auth-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appUser: AppUser;
  constructor(private auth: AuthServiceService) {
auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }
  logout() {
    this.auth.logout();
  }

  ngOnInit() {
  }

}
