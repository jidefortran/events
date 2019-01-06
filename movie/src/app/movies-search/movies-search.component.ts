import { Movie } from './../models/movie-model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MovieService } from '../services/movieService';
// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {

  list: Movie[];
  constructor(public service: MovieService,
    private firestore: AngularFirestore) { }

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

}
