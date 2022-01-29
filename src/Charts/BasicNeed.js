import React, { Component } from 'react'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

const chartData = [
  {
    label: 'Health',
    value: '10',
  },
  {
    label: 'Shelter',
    value: '13',
  },
  {
    label: 'Education',
    value: '52',
  },
  {
    label: 'Clothing',
    value: '12',
  },
  {
    label: 'Food',
    value: '13',
  },
]

const chartConfigs = {
  type: 'bar3d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Basic Need',
      subCaption: 'Percentage of homeless',
      xAxisName: 'Basic Need',
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
