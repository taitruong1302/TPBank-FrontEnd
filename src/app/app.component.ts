import { Component } from '@angular/core';
import { AddOperatorComponent } from './component/add-operator/add-operator.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TPBank';

  constructor(private dialog: MatDialog) { }

  // openAddEditOperator() {
  //   this.dialog.open(AddOperatorComponent)
  // }
}
