import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FsService } from '../fs.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent extends DataSource<any> {



  constructor(private fs: FsService) {
    super();
   }

   displayedColumns = ['title', 'description', 'author'];
   dataSource = new HomeComponent (this.fs);


   connect() {
    return this.fs.getmovies();
  }

  disconnect() {

  }


}
