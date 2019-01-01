import { AdminAuthGaurdService } from './services/admin-auth-gaurd.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule, AngularFireObject} from '@angular/fire/database';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { environment } from 'src/environments/environment';
import { MoviesCreateComponent } from './movies-create/movies-create.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MoviesEditComponent } from './movies-edit/movies-edit.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { UserServiceService } from './services/user-service.service';
import { AuthServiceService } from './services/auth-service.service';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatSortModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MoviesCreateComponent,
    MoviesDetailComponent,
    MoviesEditComponent,
    MoviesSearchComponent,
    LoginComponent,

  ],
  imports: [
    RouterModule,
    NgbModule,
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,




    RouterModule.forRoot([{
      path: 'home',
      component: HomeComponent,
      data: { title: 'Movies List' }
    },
    {
      path: 'movies-detail/:id',
      component: MoviesDetailComponent,
      data: { title: 'Movies Details' }
    },
    {
      path: 'admin/movies-create',
      component: MoviesCreateComponent,
      data: { title: 'Create Movie' }, canActivate: [AuthGaurdService, AdminAuthGaurdService]
    },
    {
      path: 'admin/movies-edit/:id',
      component:  MoviesEditComponent,
      data: { title: 'Edit Movies' }, canActivate: [AuthGaurdService, AdminAuthGaurdService]
    },
    {
      path: 'movies-search',
      component:  MoviesSearchComponent,
      data: { title: 'Search Movies' }
    },

    {
      path: 'login',
      component:  LoginComponent,
      data: { title: 'Login' }
    },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }]),
  ],
  providers: [
    AuthGaurdService,
    UserServiceService,
    AuthServiceService,
    AdminAuthGaurdService,
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
