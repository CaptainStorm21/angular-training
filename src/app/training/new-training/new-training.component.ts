import { Component, OnInit, EventEmitter, Output } from '@angular/core';
export interface Workout {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>();

  workouts: Workout[] = [
    {value: 'swimming', viewValue: 'Swimming'},
    {value: 'running', viewValue: 'Running'},
    {value: 'tennis', viewValue: 'Tennis'}
  ];

  constructor() { }

  ngOnInit() {
  }
  
  onStartTraining(){
    this.trainingStart.emit();
  }
}
