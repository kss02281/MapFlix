import React, { useState, useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import GenreDrawBar from "../Components/GenreDrawBar";
import DropDownMenuGenre from '../Components/DropDownMenuGenre';
import styled  from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHover, { Trigger, Hover } from 'react-hover';

import queryString from 'query-string'; 
import '../css/GenreTimeLine.scss';


function DrawBarChart(props) {
  const dispatch = useDispatch();
  const [cnt, setCnt] = useState(0);
  const [coronaData, setCoronaData] = useState([]);
  const [maxVal, setMaxVal] = useState(0);

  const [ratio, setRatio] = useState(1);

  useMemo(() => {
    console.log('/timeline/'+props.nationCode);
    console.log(props.nationCode);
    console.log(props.nation);
    fetch('/timeline/'+props.nationCode).then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => setCoronaData(data.map(item => {
        return {week: item.week, confirmedCnt: Math.sqrt(item.confirmed)}
    })))
    
    console.log(coronaData)
    setCnt(1);
  },[cnt, props.nationCode])


  useEffect(()=>{
    const confirmedList = coronaData.map((item)=>item.confirmedCnt);
    confirmedList.sort(function(a,b){
      return parseInt(a-b);
    });
    setMaxVal(confirmedList[confirmedList.length-1]);
    
    setRatio(maxVal/400);
    console.log(confirmedList[confirmedList.length-1]);
  },[ coronaData ])

  const optionsCursorTrueWithMargin = {
    followCursor:true,
    shiftX:20,
    shiftY:0
} 
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

  return (
      <div className='timelineG'>
          <span className="nationNameG">{props.nation}'s</span>
          <div className="DaTG"> 
          <span className="titleG"> confirmed people by week</span>
          </div>
          <ChartContainerG maxHeight={maxVal}>
            {
              coronaData.map((item, idx) => (
                <>
                  <BarG />
                  <ReactHover options={optionsCursorTrueWithMargin}>
                    <Trigger type="trigger">
                      <GenreDrawBar
                        countryCode={props.nationCode}
                        fullweek={item.week}
                        year={parseInt(item.week.slice(0,4))}
                        week={parseInt(item.week.slice(5,8))}
                        confirmedCnt={item.confirmedCnt}
                        maxHeight={maxVal}
                        ratio={ratio}
                        onClick={() => {
                        }}
                      />
                    </Trigger>
                    <Hover type='hoverG'>
                      <div className='hoverContainerG'>
                        <p className='hoverG'>{props.nation}</p>
                        <p className='hoverG'>{item.week}</p>
                        <p className='hoverG'>Confirmed People : {parseInt(item.confirmedCnt ** 2)}</p>
                      </div>
                    </Hover>
                  </ReactHover>
                </>
              ))
            }
          </ChartContainerG>
          
      </div>
  )
}

const GenreTimeLine = ({ history, location, match, }) => {
  const query = queryString.parse(location.search)
  console.log(query)
  const { nation, nationCode } = query;

  const { year, week } = useSelector(
    state => ({
      year: state.yearWeek.year, week: state.yearWeek.week
    }),
    shallowEqual
  )
  
  return (
    <div>
      <DropDownMenuGenre />
      <DrawBarChart nation={nation} nationCode={nationCode}/>
    </div>
  );
};

export default GenreTimeLine;

const ChartContainerG = styled.div`
  display: flex;
  flex-direction: row;
  height: 700px;
  flex-wrap: nowrap;
  overflow: auto;
  padding: 0;
  align-items: flex-start;
  margin-top: 50px;
`
const BarG = styled.div`
    width: 2px;
    height: 300px;
`
