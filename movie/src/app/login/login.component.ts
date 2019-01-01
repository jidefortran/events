import { AppUser } from './../models/app-user';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  appUser: AppUser;
  constructor(private auth: AuthServiceService) { }

  login() {
    this.auth.login();
  }

  ngOnInit() {
  }

}
