import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
export interface Chart {
  labels: Label[];
  data: MultiDataSet;
  type: ChartType;
  legend: string;
}
