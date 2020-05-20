import { Component, OnInit, Input } from '@angular/core';
import { Chart } from '../../interfaces/chart.interface';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {

  @Input()
  public chart: Chart;

  constructor() { }

  ngOnInit(): void {
  }
}
