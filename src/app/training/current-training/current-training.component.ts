import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';
@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: timer;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.timer = setInterval(()=> {
      this.progress = this.progress + 5;
      if (this.progress >=100){
        clearInterval(this.timer);
        console.log('stop')
      }
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.timer);
    this.dialog.open(StopTrainingComponent );
  }
}
