import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainChartComponent } from './main-chart/main-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@NgModule({
  declarations: [MainChartComponent],
  imports: [CommonModule, NgxEchartsModule.forRoot({ echarts })],
  exports: [MainChartComponent],
})
export class ChartsModule {}
