import { Component, OnInit } from '@angular/core';

import { EChartsOption, graphic } from 'echarts';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.css'],
})
export class MainChartComponent {
  chartOption: EChartsOption = {
    // title: {
    //   text: 'إحصائيات إستخدام القسيمة',
    //   subtext: '05 يوليو , 2023 - 05 أغسطس , 2023',
    //   right: '1%',
    //   subtextStyle: {
    //     fontSize: 12,
    //     fontWeight: 400,
    //     fontFamily: 'Noto Sans Arabic',
    //     lineHeight: 12.9,
    //     overflow: 'none',
    //   },
    //   textStyle: {
    //     fontSize: 14,
    //     fontWeight: 400,
    //     fontFamily: 'Noto Sans Arabic',
    //     lineHeight: 12.9,
    //   },
    // },

    grid: {
      left: '3%',
      right: '4%',
      bottom: '23%',
      containLabel: true,
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        fontSize: 12,
        fontWeight: 500,
        fontFamily: 'Noto Sans Arabic',
      },
      data: [
        'ديسمبر',
        'نوفمبر',
        'اكتوبر',
        'سبتمبر',
        'اغسطس',
        'يوليو',
        'يونيو',
        'مايو',
        'ابريل',
        'مارس',
        'فبراير',
        'يناير',
      ],
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
    },
    tooltip: {
      trigger: 'axis',
      showDelay: 0,
      confine: true,
      transitionDuration: 0.2,
      formatter: function (params: any) {
        return `<b>${params[0].axisValue}</b> : $ ${params[0].data}`;
      },
      backgroundColor: '#000',
      textStyle: {
        color: '#fff',
      },
      axisPointer: {
        lineStyle: {
          color: '#8A74F9',
          width: 1.62,
          type: 'solid',
        },
      },
    },
    series: [
      {
        data: [
          820, 932, 901, 934, 1290, 1430, 1550, 1200, 1650.145, 1680.189, 901,
          934,
        ],
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 2.42,
        },
        showSymbol: false,
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#8A74F9' },
            { offset: 0.2637, color: 'rgba(138, 116, 249, 0.5)' },
            { offset: 1, color: 'rgba(138, 116, 249, 0)' },
          ]),
        },
        symbolSize: 19.05,
        emphasis: {
          focus: 'series',

          itemStyle: {
            color: '#8A74F9',
          },
        },
      },
    ],
  };
}
