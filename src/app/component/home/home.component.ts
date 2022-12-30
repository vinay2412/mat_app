import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private dialog: MatDialog) {

  }
  openDialog() {
  this.dialog.open(EditComponent, {
    width: '25%'
  });
  }
}
