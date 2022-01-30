import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const DonationCharts = ({data}) => {
    console.log(data);
    const chartConfigs = {
        type:"area2d",
        width: "60%",
        height: 400,
        dataFormat: 'json',
        animationDuration:2,
        dataSource:{
            chart:{
                caption:"Donation of Last 12 Months",
                subCaption :"Last",
                xAxisName:"Month",
                yAxisName:"Amount",
                numberPrefix:"$",
                showValues:"1",
                theme:"fusion"
            },
            data: data
        }
    };
    return <ReactFC {...chartConfigs} />
};

export default DonationCharts