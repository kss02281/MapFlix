import React, { useState, useEffect, useMemo } from "react";
import { southKoreaData } from "../data/Corona_data";
import DrawBar from "../Components/DrawBar";
import styled, {css} from 'styled-components';
import { Button } from "react-bootstrap";
import ReactHover, { Trigger, Hover } from 'react-hover';


function DrawBarChart(props) {
  const [nationName, setNationName] = useState('');
  const [coronaData, setCoronaData] = useState([{'week': 'intialweek', 'confirmedCnt':1}]);
  const [nationCode, setNationCode] = useState(props.nationCode);
  const [maxVal, setMaxVal] = useState(0);

  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    setNationCode(props.nationCode);
    setNationName(props.nation);
  },[ nationName , nationCode])

  useMemo(() => {
    console.log('/timeline/'+props.nationCode);

    fetch('/timeline/'+nationCode).then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => setCoronaData(data.map(item => {
        return {week: item.week, confirmedCnt: item.confirmed}
    })))
    console.log(coronaData)
  },[ nationName ])


  useEffect(()=>{
    const confirmedList = coronaData.map((item)=>item.confirmedCnt);
    confirmedList.sort(function(a,b){
      return parseInt(a-b);
    });
    setMaxVal(confirmedList[confirmedList.length-1]);
    
    setRatio(maxVal/400);
    console.log(confirmedList[confirmedList.length-1]);
  },[coronaData])

  const clickHandler = (any) => {
      console.log(any)
      alert("클릭했어??");
  };

  const optionsCursorTrueWithMargin = {
    followCursor:true,
    shiftX:20,
    shiftY:0
}

  return (
      <div>
          <h1>클릭된 나라는? {nationName}</h1>
          <ChartContainer maxHeight={maxVal}>
            {
              coronaData.map((item) => (
                <>
                  <Bar />
                  <ReactHover options={optionsCursorTrueWithMargin}>
                    <Trigger type="trigger">
                      <DrawBar
                        week={item.week}
                        confirmedCnt={item.confirmedCnt}
                        maxHeight={maxVal}
                        ratio={ratio}
                        onClick={clickHandler}
                      />
                    </Trigger>
                    <Hover type='hover'>
                      <p>{nationName} 몇주차? {item.week}</p>
                      <p>{item.confirmedCnt}</p>
                    </Hover>
                  </ReactHover>
                </>
              ))
            }
          </ChartContainer>
      </div>
  )
}
const TimeLine = ({ history, location }) => {
  const nation = location.props.nation;
  const nationCode = location.props.nationCode;

  return (
    <div>
      <DrawBarChart nation={nation} nationCode={nationCode}/>
      <Button
        onClick={() => {
          history.push("/");
        }}
        style={{clear:'both'}}
      >
        Go To Main Page
      </Button>
    </div>
  );
};

export default TimeLine;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 800px;
  flex-wrap: nowrap;
  overflow: auto;
  justify-content: center;
  align-items: stretch;
  margin-left: 50px;

`
const Bar = styled.div`
    width: 2px;
`