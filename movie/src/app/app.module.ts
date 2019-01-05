import { RouterModule } from '@angular/router';
import { MovieService } from './services/movieService';
// import { AdminAuthGaurdService } from './services/admin-auth-gaurd.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { environment } from 'src/environments/environment';
import { MoviesCreateComponent } from './movies-create/movies-create.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MoviesEditComponent } from './movies-edit/movies-edit.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesCreateComponent,
    MoviesDetailComponent,
    MoviesEditComponent,
    MoviesSearchComponent,
    ],
    imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule,
      FormsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      RouterModule.forRoot([{
        path: 'movies-create',
        component: MoviesCreateComponent,
        data: { title: 'Movies List' }
      },
      {
        path: 'movies-detail/:id',
        component: MoviesDetailComponent,
        data: { title: 'Movies Details' }
      },
      {
        path: 'admin/movies-edit/:id',
        component:  MoviesEditComponent,
        data: { title: 'Edit Movies' }
      },
      {
        path: 'movies-search',
        component:  MoviesSearchComponent,
        data: { title: 'Search Movies' }
      },

     ]),
    ],
    providers: [
      // AdminAuthGaurdService,
    //  AngularFirestoreModule,
    //  Movies,
      MovieService
    ],
    bootstrap: [AppComponent]
  })

  export class AppModule { }
