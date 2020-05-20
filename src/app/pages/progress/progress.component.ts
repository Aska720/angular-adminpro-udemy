import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  public bluePercent: number = 20;

  public greenPercent: number = 35;

  constructor() { }

  ngOnInit(): void {
  }
}
