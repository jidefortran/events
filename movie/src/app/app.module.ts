import { AuthGuardService } from './services/auth-guard.service';
import { MaterialModule } from './material/material.module';
// import { Movie } from './models/movie-model';
import { RouterModule } from '@angular/router';
import { MovieService } from './services/movieService';
// import { AdminAuthGaurdService } from './services/admin-auth-gaurd.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {FirebaseModule, FirebaseProvider} from 'angular-firebase';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { environment } from 'src/environments/environment';
import { MoviesCreateComponent } from './movies-create/movies-create.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MoviesEditComponent } from './movies-edit/movies-edit.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { LoginComponent } from './login/login.component';
import { FrontComponent } from './front/front.component';
import { config } from './services/app.config';
import { Observable } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';
import {EmbedVideo} from 'ngx-embed-video';
import { UpdateBarComponent } from './update-bar/update-bar.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { UserProfileComponent } from './user-profile/user-profile.component';






@NgModule({
  declarations: [
    UserProfileComponent,
    AppComponent,
    HeaderComponent,
    MoviesCreateComponent,
    MoviesDetailComponent,
    MoviesEditComponent,
    MoviesSearchComponent,
    LoginComponent,
    FrontComponent,
    UpdateBarComponent,
    SuperSecretComponent,
    ],
    imports: [
      HttpClientModule,
      EmbedVideo.forRoot(),
      MaterialModule,
      BrowserModule,
      ReactiveFormsModule,
      NgxAuthFirebaseUIModule.forRoot({
        apiKey: 'AIzaSyAx75QItul2mOQiZpgbIljQb3nO_V0n3-s',
        authDomain: 'movie-56c7e.firebaseapp.com',
        databaseURL: 'https://movie-56c7e.firebaseio.com',
        projectId: 'movie-56c7e',
        storageBucket: 'movie-56c7e.appspot.com',
        messagingSenderId: '126640968860'
      }),
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      FormsModule,
    BrowserAnimationsModule,

      RouterModule.forRoot([{
        path: 'movies-create',
        component: MoviesCreateComponent,
        data: { title: 'Movies List' }
      },
      { path: 'secret', component: SuperSecretComponent, canActivate: [AuthGuardService]

      },
      {
        path: 'home',
         children: [
           {path: '', component: FrontComponent},
          { path: 'movies-detail/:id', component: MoviesDetailComponent},
         ]
      },
      {
        path: 'admin/movies-edit/:id',
        component:  MoviesEditComponent,
        data: { title: 'Edit Movies' }
      },
      {
        path: 'movies-search',
        component:  MoviesSearchComponent, canActivate: [AuthGuardService]
      },

      {
        path: 'login',
        component: LoginComponent,
        data: { title: ' Admin Login' }
      }
     ]),
    ],
    providers: [
      // AdminAuthGaurdService,
    //  AngularFirestoreModule,
    FirebaseProvider,
      MovieService
    ],
    bootstrap: [AppComponent]
  })

  export class AppModule { }
