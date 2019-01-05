import { Movies } from '../models/movie-model';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  formData: Movies;
  constructor(private firestore: AngularFirestore) { }

  getMovies() {
    return this.firestore.collection('movies').snapshotChanges();
  }
}


