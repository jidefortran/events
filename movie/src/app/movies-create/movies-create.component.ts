import { Component, OnInit, NgModule } from '@angular/core';
import { MovieService } from '../services/movieService';
import { AngularFirestore } from '@angular/fire/firestore';
import {NgForm} from '@angular/forms';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
// import { ToastrService } from 'ngx-toastr';

@NgModule({
  imports: [
  NgxAuthFirebaseUIModule
  ]
})

@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.css']
})
export class MoviesCreateComponent implements OnInit {

  constructor(public service: MovieService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      Title: '',
      Description: '',
      CummulativeGross: '',
      Rating: '',
      Year: '',
      Image: '',
      Budget: '',
      starcast1: '',
      starcast2: '',
      starcast3: '',
      Trailer: ''
    };
  }
      onSubmit(form: NgForm) {
        const data = Object.assign({}, form.value);
        delete data.id ;
        if (form.value.id == null) {
          this.firestore.collection('movies').add(data);
          console.log('saved');
        } else {
          this.firestore.doc('movies/' + form.value.id).update(data);
          console.log('not saved');
        }
       // this.resetForm(form);
       // this.toastr.success('Submitted successfully', 'emp.Register');
       // console.log(this.service.formData.title);

    }


  }

