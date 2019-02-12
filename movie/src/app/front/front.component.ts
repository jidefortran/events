import { Movie } from './../models/movie-model';
import { AngularFirestore } from '@angular/fire/firestore';
import { MovieService } from './../services/movieService';
import { Component, OnInit } from '@angular/core';
import { Router , RouterModule} from '@angular/router';
import { MoviesDetailComponent } from '../movies-detail/movies-detail.component';
import {MatCardModule} from '@angular/material/card';
import { EmbedVideoService } from 'ngx-embed-video';



// import { firestore } from 'firebase';






@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  list: Movie[];
  movie$: Movie[];

  constructor(private service: MovieService , private firestore: AngularFirestore , private route: Router) { }
  ngOnInit() {
    this.service.getMovies().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Movie;
      });
    });
  }
  getMovieDetails(filmId: string) {
  // this.route.navigateByUrl('/movies-detail');
   this.route.navigate(['home/movies-detail/' , { filmId}]);
 this.service.getMovieDetail(filmId).subscribe((movie => {
    this.movie$ = movie;
    console.log(this.movie$);
   })
 );


  }

}
