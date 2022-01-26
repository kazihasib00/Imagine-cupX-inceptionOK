import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartData = [
    {
        "label": "Treatment",
        "value": "23"
    },
    {
        "label": "Education",
        "value": "12"
    },
    {
        "label": "Shelter",
        "value": "26"
    },
    {
        "label": "Clothing",
        "value": "11"
    },
    {
        "label": "Food",
        "value": "34"
    },
]

const chartConfigs = {
    type: 'bar3d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Basic Need",
            "subCaption": "Percentage of child",
            "xAxisName": "Basic Need",
            "yAxisName": "Child",
            "numberSuffix": "%",
            "theme": "ocean",
            animation: 1,
            animationDuration: 3,
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