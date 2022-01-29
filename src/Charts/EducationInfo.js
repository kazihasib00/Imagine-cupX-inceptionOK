import React, { Component } from 'react'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const chartData = [
  {
    label: 'Primary',
    value: '25',
  },
  {
    label: 'Uneducated',
    value: '52',
  },
  {
    label: 'Secondary',
    value: '7',
  },
  {
    label: 'Madrasha',
    value: '16',
  },
]

const chartConfigs = {
  type: 'doughnut3d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Education Status',
      subCaption: 'Percentage of homeless in Education',
      xAxisName: 'Industry',
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
