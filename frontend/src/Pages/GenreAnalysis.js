import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import '../css/GA.scss';

function GenreAnalysis() {
    const data = [
        ['Shanghai', 24.2],
        ['Beijing', 20.8],
        ['Karachi', 14.9],
        ['Shenzhen', 13.7],
        ['Guangzhou', 13.1],
        ['Istanbul', 12.7],
        ['Mumbai', 12.4],
        ['Moscow', 12.2],
        ['São', 12.0],
        ['Delhi', 11.7],
        ['Kinshasa', 11.5],
        ['Tianjin', 11.2],
        ['Lahore', 11.1],
        ['Jakarta', 10.6],
        ['Dongguan', 10.6],
        ['Lagos', 10.6],
        ['Bengaluru', 10.3],
        ['Seoul', 9.8],
        ['Foshan', 9.3],
        ['Tokyo', 9.3]
    ]

const dataBar = data.map((datas) => 
(<div style={{marginLeft: "20px",width: "20px", height:datas[1]*10, backgroundColor:"#111111", border:"2px solid black"}}></div>))
const dataText = data.map((datas) => 
(<div style={{transform: "rotate(45deg)", marginLeft: "20px", width: "20px",fontSize:"15px"}}>{datas[0]}</div>))

  return (
    <div>
        <div className="Title">Correlation between Covid-19 confirmeds and Netflix subscribers</div>
        <div className="Gap"></div>
        <div className="Graph">
            <img src="https://han.gl/5HFmY" style={{width:"55vw"}}/>
        {/*
            <div className="Box">
            <div className="dataBar">{dataBar}</div>
            </div>
            
            <div className="dataText">{dataText}</div>
        ​ */}
        </div>
        <div className="Description">
        In the graph above, the bars represent the number of confirmed cases, and the line represents the number of Netflix's new subscribers. In the beginning of the pandemic, the number of subscribers was greatly increased, but over time, the number of subscribers decreased significantly.  And then, at some point, you can see that it rises sharply. It is presumed to be because the number of confirmed cases surged as the lockdown in certain areas was eased, resulting in a stronger lockdown. Since then, there has been a significant increase or decrease in the number of confirmed cases, but the number of new subscribers is decreasing. This means that people have enough subscriptions, no more new subscriptions.</div>
    </div>
  );
}

export default GenreAnalysis;
