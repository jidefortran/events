import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public auth : AuthService) { }

  ngOnInit() {
  }

}
