import { Movie } from './../models/movie-model';
import { AngularFirestore } from '@angular/fire/firestore';
import { MovieService } from './../services/movieService';
import { Component, OnInit } from '@angular/core';
import { Router , RouterModule} from '@angular/router';
import { MoviesDetailComponent } from '../movies-detail/movies-detail.component';
import {MatCardModule} from '@angular/material/card';
import { EmbedVideoService } from 'ngx-embed-video';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';



// import { firestore } from 'firebase';






@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  list: Movie[];
  movie$: Movie[];
  iframe_html: any;
  youtubeUrl = 'https://www.youtube.com/watch?v=iHhcHTlGtRs';
  Trailer: string;


  constructor(private service: MovieService , private firestore: AngularFirestore , private route: Router,
    private videoService: EmbedVideoService) {

    }
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
   // this.route.navigate(['home/movies-detail/' , { filmId}]);
 this.service.getMovieDetail(filmId).subscribe((movie => {
    this.movie$ = movie;

   })
 );


  }

  showTrailer(Trailer: string) {
    this.iframe_html = this.videoService.embed(Trailer, {
      query: { portrait: 0, color: 'ffff12' },
      attr: { width: 400, height: 253 }
    });
 console.log(Trailer);
  }

}
