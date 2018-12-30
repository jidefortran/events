import { MoviesEditComponent } from './movies-edit/movies-edit.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { environment } from 'src/environments/environment';
import { MoviesCreateComponent } from './movies-create/movies-create.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';


const appRoutes: Routes = [
  {
    path: 'app-home',
    component: HomeComponent,
    data: { title: 'Movies List' }
  },
  {
    path: 'app-movies-detail/:id',
    component: MoviesDetailComponent,
    data: { title: 'Movies Details' }
  },
  {
    path: 'app-movies-create',
    component: MoviesCreateComponent,
    data: { title: 'Create Movie' }
  },
  {
    path: 'app-movies-edit/:id',
    component:  MoviesEditComponent,
    data: { title: 'Edit Movies' }
  },
  {
    path: 'app-movies-search',
    component:  MoviesSearchComponent,
    data: { title: 'Search Movies' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MoviesCreateComponent,
    MoviesDetailComponent,
    MoviesEditComponent,
    MoviesSearchComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
