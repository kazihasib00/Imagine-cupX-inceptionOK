import React, { Component } from 'react'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const chartData = [
  {
    label: 'Garments',
    value: '14',
  },
  {
    label: 'Heavy industry',
    value: '16',
  },
  {
    label: 'Hotel/Restaurant',
    value: '17',
  },
  {
    label: 'House-hold',
    value: '13',
  },
  {
    label: 'Transport',
    value: '18',
  },
  {
    label: 'Illegal Work',
    value: '7',
  },
  {
    label: 'beggar',
    value: '5',
  },
  {
    label: 'UnEmployed',
    value: '10',
  },
]

const chartConfigs = {
  type: 'column3d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Child Worker By Industry',
      subCaption: 'Percentage of child working sector',
      xAxisName: 'Industry',
      yAxisName: 'Child',
      numberSuffix: '%',
      theme: 'ocean',
      animationDuration: 3,
    },
    data: chartData,
  },
}

const ChartComponent = () => {
  return <ReactFC {...chartConfigs} />
}

export default ChartComponent
