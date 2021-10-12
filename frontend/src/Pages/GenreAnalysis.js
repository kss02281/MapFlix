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
        <div className="Graph">
            <div className="Box">
            <div className="dataBar">{dataBar}</div>
            </div>
            
            <div className="dataText">{dataText}</div>
        </div>
        <div className="Description">
            하얗게 번지는 머릿속에다
            그대를 새겨놓고 저 멀리 날아가
모든 게 보이는 두 눈을 감고서
시간을 되돌려서 그 때로 돌아가고 싶어
Falling 이대로, falling for you
날 잡아줄 수 없어도
Falling 이대로, falling for you
날 감싸줄 수 없나요
좋았던 나날도 너무 아팠던 날도
이제 돌이켜보면 그저 그랬었나요
아니라 말해요 멍든 가슴도
멍해진 내마음도 다시 느낄 수만 있다면
Falling 이대로, falling for you
날 잡아줄 수 없어도
Falling 또 다시, falling for you
날 감싸줄 수 없나요
까맣게 번지는 하늘 위에서
한없이 추락하는 날 보고만 있네요
Falling 이대로, falling for you
이런 날 잡아 주세요
Falling 또 다시, falling for you
제발 날 감싸 주세요
한없이 추락하더라도
바닥까지 떨어져도
그댈 향해, 난 falling for you
그저 그대만 보네요</div>
    </div>
  );
}

export default GenreAnalysis;
