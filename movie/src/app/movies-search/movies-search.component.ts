import { UpdateBarComponent } from './../update-bar/update-bar.component';
import { Movie } from './../models/movie-model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MovieService } from '../services/movieService';
import * as firebase from 'firebase';
// import { ToastrService } from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {
changeMovie$: Movie[];
 db = firebase.firestore();
  list: Movie[];
  options: FormGroup;

  chId: string;
  constructor(public service: MovieService,
    private firestore: AngularFirestore, public fb: FormBuilder,  private snackBar: MatSnackBar ) {
      this.options = fb.group({ color: 'primary', fontSize: [14, Validators.min(10)],
      });

     }
     openSnackBar() {
      this.snackBar.open('Your Update was saved', '', {
        duration: 1000,
      });
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

  onEdit(emp: Movie) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.firestore.doc('movies/' + id).delete();
    }
  }
onChange(filmId: string) {
this.service.getMovieUpdate(filmId).subscribe((movie => {
  this.changeMovie$ = movie;
  this.chId = filmId;
  console.log(this.chId);
}));
}

 // const data = Object.assign({}, form.value);
// this.db.collection('movies').doc(this.chId).update({data});
// return this.firestore.doc<Movie>('movies/${this.chId}').update(form);


onSubmit(form: NgForm) {
  const data = Object.assign({}, form.value);
  delete data.id ;
  if (this.chId == null) {
    this.firestore.doc('movies/' + this.chId).update(data);
    console.log('not saved');


  } else {
    this.firestore.doc('movies/' + this.chId).update(data);
    console.log('update saved');
  }
} // this.resetForm(form);
 // this.toastr.success('Submitted successfully', 'emp.Register');
 // console.log(this.service.formData.title);

}


