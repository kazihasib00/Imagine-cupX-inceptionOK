import React, { Component } from 'react'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const chartData = [
  {
    label: '5-7',
    value: '11',
  },
  {
    label: '8-10',
    value: '12',
  },
  {
    label: '9-12',
    value: '21',
  },
  {
    label: '13-16',
    value: '18',
  },
  {
    label: '16-18',
    value: '24',
  },
  {
    label: '18+',
    value: '14',
  },
]

const chartConfigs = {
  type: 'bar3d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Age Info',
      subCaption: 'Percentage of homeless',
      xAxisName: 'Age',
      yAxisName: 'Homeless',
      numberSuffix: '%',
      theme: 'ocean',
      animation: 1,
      animationDuration: 3,
      animateClockwise: 1,
      alphaAnimation: 50,
    },
    data: chartData,
  },
}

const ChartComponent = () => {
  return <ReactFC {...chartConfigs} />
}

export default ChartComponent
