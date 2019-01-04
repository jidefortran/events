import { Component, OnInit } from '@angular/core';
import { movieService } from '../services/movieService';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.css']
})
export class MoviesCreateComponent implements OnInit {

  constructor(private movie: movieService, firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.movie.formData = {
      id: null,
      Title: '',
      Description: '',
      empCode: '',
      mobile: '',
    }
  }

}
