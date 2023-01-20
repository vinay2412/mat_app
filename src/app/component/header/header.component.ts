import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isShow: boolean = false;
  navtoggle(){
    this.isShow = !this.isShow;
  }

}
