import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-training',
  template: `
    <h2 mat-dialog-title>Are you sure</h2>
    <mat-dialog-actions>
      <button mat-flat-button color="primary" [mat-dialog-close]="true">
        Yes
      </button>
      <button mat-flat-button color="warn" [mat-dialog-close]="false">
        No!
      </button>
    </mat-dialog-actions>
  `
})
export class StopTrainingComponent {}
