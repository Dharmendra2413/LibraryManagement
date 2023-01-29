import { Component, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogMoreinfoComponent } from '../dialog-moreinfo/dialog-moreinfo.component';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogMoreinfoComponent, {
      // width: '500px',
      // height: '38.3%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
