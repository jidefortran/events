import { FrontComponent } from './../front/front.component';
import { Movie } from './../models/movie-model';
import { Component, OnInit , Input} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MovieService } from './../services/movieService';
import { config } from 'rxjs';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  providers: [FrontComponent],
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

 // movieItem = this.service.movieItem;
 @Input() PData: string;
 movie$: Movie[];
// filmId: Movie;
filmId: string;
 db = firebase.firestore();

  constructor(private service: MovieService , private firestore: AngularFirestore, private route: Router,
    private fc: FrontComponent) {
// this.article = this.service.getMovieDetails(this.filmId);



  //  this.db.collection('movies').where(firebase.firestore.FieldPath.documentId(), '==', this.filmId).get().then(querySnapshot => {

   //   this. db.collection('movies').where('year', '==' , '2017' ).get().then((querySnapshot) => {
      //  console.log(filmId);
       // console.log(querySnapshot.docs);


}

ngOnInit() {
  console.log(this.PData);
  console.log('we are ok');

// this.fc.getMovieDetails(this.filmId); {
  // this.route.navigateByUrl('/movies-detail');
this.service.getMovieDetail(this.PData).subscribe((movie => {
 this.movie$ = movie;
  console.log(this.movie$);
 })
  );


}
  }
