// import { firestore } from 'firebase/firestore';
import { FirebaseModule } from 'angular-firebase';
import { Movie } from '../models/movie-model';
import { FormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable, Input } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { config } from './app.config.js';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

import { map } from 'rxjs/operators';


firebase.initializeApp(environment.firebaseConfig);


 const db = firebase.firestore();

@Injectable({
  providedIn: 'root'
})


export class MovieService {
  formData: Movie;
  listz: Movie[];
 movieItem$: Observable<any[]>;
  constructor(private firestore: AngularFirestore, private router: Router ) {

   }



  getMovies() {
    return this.firestore.collection('movies').snapshotChanges();
  }
  getMovieDetail (filmId: string) {
    // tslint:disable-next-line:max-line-length
    this.movieItem$ =  this.firestore.collection('movies', ref => ref
   .where (firebase.firestore.FieldPath.documentId(), '==', filmId)).valueChanges();
   return this.movieItem$;
         //   return <Movie>{
          //      id: snap.payload.doc.id,

                // ...snap.payload.doc.data() as Movie

       //
  }


  //   console.log(filmId);
  // snapshot.docs.forEach(doc => {
 //   console.log(doc.id);
  //    console.log(doc.data());
// this.router.navigateByUrl('/movies-detail');

  //    console.log(filmId);

 //  return db.collection('movies').get().then((snapshot) => {
// snapshot.docs.values();
 //  })




 getMovieUpdate (filmId: string): Observable<Movie[]> {
  // tslint:disable-next-line:max-line-length
  return this.firestore.collection('movies', ref => ref
 .where (firebase.firestore.FieldPath.documentId(), '==', filmId)).snapshotChanges()
 .pipe(
  map(snaps => {

       return  snaps.map(snap => {
         const data = snap.payload.doc.data() as Movie;
         const id = snap.payload.doc.id;
         this.firestore.collection('movies').doc(filmId).update({});

       return {id, ...data};
       //   return <Movie>{
        //      id: snap.payload.doc.id,

              // ...snap.payload.doc.data() as Movie

     //     };
         } );
           })
            );
}




}
