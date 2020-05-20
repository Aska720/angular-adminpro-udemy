import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html'
})
export class ChartsComponent implements OnInit {

  charts: any = {
    chart1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data: [24, 30, 46],
      type: 'doughnut',
      legend: 'El pan se come con'
    },
    chart2: {
      labels: ['Hombres', 'Mujeres'],
      data: [4500, 6000],
      type: 'doughnut',
      legend: 'Entrevistados'
    },
    chart3: {
      labels: ['Si', 'No'],
      data: [95, 5],
      type: 'doughnut',
      legend: '¿Le dan gases los frijoles?'
    },
    chart4: {
      labels: ['No', 'Si'],
      data: [85, 15],
      type: 'doughnut',
      legend: '¿Le importa que le den gases?'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
