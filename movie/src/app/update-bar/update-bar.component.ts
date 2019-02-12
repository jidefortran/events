import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';



@Component({
  selector: 'app-update-bar',
  templateUrl: './update-bar.component.html',
  styles: [`
    .updated {
      color: hotpink;
    }
  `],
})
export class UpdateBarComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

}
