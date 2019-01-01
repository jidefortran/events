import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FsService {
  ref = firebase.firestore().collection('movies');
  constructor() { }
  getmovies(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        const movies = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          movies.push({
            key: doc.id,
            title: data.title,
            description: data.description,
            author: data.author
          });
        });
        observer.next(movies);
      });
    });
  }
  getBoard(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        const data = doc.data();
        observer.next({
          key: doc.id,
          title: data.title,
          description: data.description,
          author: data.author
        });
      });
    });
  }

  postmovies(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }

  updatemovies(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }

  deletemovies(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }
}
