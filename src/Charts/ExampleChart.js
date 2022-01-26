import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartData = [
    {
        "label": "Garments",
        "value": "290"
    },
    {
        "label": "Heavy industry",
        "value": "260"
    },
    {
        "label": "Hotel/Restaurant",
        "value": "180"
    },
    {
        "label": "House-hold",
        "value": "140"
    },
    {
        "label": "Transport",
        "value": "115"
    },
    {
        "label": "Illegal Work",
        "value": "100"
    },
    {
        "label": "beggar",
        "value": "100"
    },
    {
        "label": "UnEmployed",
        "value": "100"
    }
]

const chartConfigs = {
    type: 'column3d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Child Worker By Industry",
            "subCaption": "Percentage of child working sector",
            "xAxisName": "Industry",
            "yAxisName": "Child",
            "numberSuffix": "%",
            "theme": "ocean",
            animationDuration:2
        },
        "data": chartData
        },
};

const ChartComponent = () =>{
    return <ReactFC {...chartConfigs} />;
}


export default ChartComponent