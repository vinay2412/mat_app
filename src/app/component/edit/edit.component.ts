import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  constructor( public router : Router,
    public dialogRef: MatDialogRef<EditComponent>){}

  closeDialog() {
      Swal.fire('Update Successfully.')
      // this.errorMessage = "";
      this.router.navigate(["/"]);
      // this.successMessage = "Your account has been created. Please log in.";
  }
}
