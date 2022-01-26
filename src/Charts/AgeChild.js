import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartData = [
    {
        "label": "0-2",
        "value": "23"
    },
    {
        "label": "3-5",
        "value": "12"
    },
    {
        "label": "6-8",
        "value": "26"
    },
    {
        "label": "9-11",
        "value": "11"
    },
    {
        "label": "12-14",
        "value": "34"
    },
    {
        "label": "15-17",
        "value": "4"
    },
]

const chartConfigs = {
    type: 'bar3d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Age Info",
            "subCaption": "Percentage of child",
            "xAxisName": "Age",
            "yAxisName": "Child",
            "numberSuffix": "%",
            "theme": "ocean",
            animation: 1,
            animationDuration: 2,
            animateClockwise: 1,
            alphaAnimation: 50
        },
        "data": chartData
    },
};

const ChartComponent = () => {
    return <ReactFC {...chartConfigs} />;
}


export default ChartComponent