import React, { useState, useEffect, useMemo } from "react";
// import { southKoreaData } from "../data/Corona_data";
import { useDispatch, useSelector } from "react-redux";
import { setNationInfo, switchShow } from "../Redux/action";
import DrawBar from "../Components/DrawBar";
import styled, {css} from 'styled-components';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHover, { Trigger, Hover } from 'react-hover';

import '../css/font.css';


function DrawBarChart(props) {
  const dispatch = useDispatch();

  const [nationName, setNationName] = useState('');
  const [coronaData, setCoronaData] = useState([]);
  const [nationCode, setNationCode] = useState(props.nationCode);
  const [maxVal, setMaxVal] = useState(0);

  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    setNationCode(props.nationCode);
    setNationName(props.nation);
    dispatch(setNationInfo(nationName, nationCode))
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
      dispatch(switchShow(true))
  };

  const optionsCursorTrueWithMargin = {
    followCursor:true,
    shiftX:20,
    shiftY:0
}

  return (
      <div>
          <p style={{fontSize:'4em', marginTop:'30px'}}>{nationName}</p>
          <ChartContainer maxHeight={maxVal}>
            {
              coronaData.map((item, idx) => (
                <>
                  <Bar />
                  <ReactHover options={optionsCursorTrueWithMargin}>
                    <Trigger type="trigger">
                      {
                        idx ===0 ? <DrawBar
                          idx={idx}
                          week={item.week}
                          confirmedCnt={item.confirmedCnt}
                          maxHeight={maxVal}
                          ratio={ratio}
                          onClick={clickHandler}
                        /> : <DrawBar
                        week={item.week}
                        confirmedCnt={item.confirmedCnt}
                        maxHeight={maxVal}
                        ratio={ratio}
                        onClick={clickHandler}
                      />
                      }
                    </Trigger>
                    <Hover type='hover'>
                      <HoverContainer>
                        <p>{nationName}</p>
                        <p>{item.week}</p>
                        <p>Confirmed People : {item.confirmedCnt}</p>
                      </HoverContainer>

                    </Hover>
                  </ReactHover>
                </>
              ))
            }
          </ChartContainer>
      </div>
  )
}


function ContentShow() {
  const showBoolean = useSelector(state => state.showBoolean);

  return (
    <>
      {
        {showBoolean}?
          <div><h1>THIS IS CONTENT SHOW BOX</h1></div>
          :
          null
      }
    </>
  )
}

const TimeLine = ({ history, location }) => {
  const nation = location.props.nation;
  const nationCode = location.props.nationCode;


  return (
    <div>
      <DrawBarChart nation={nation} nationCode={nationCode}/>
      <Container>
        <Button
          onClick={() => {
            history.push("/");
          }}
          style={{textAlign:'center', fontSize:'2em', marginBottom:'30px'}}
        >
          Go To Main Page
        </Button>
        <ContentShow />
      </Container>
    </div>
  );
};

export default TimeLine;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  align-items: center;
  justify-content: center;
`

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 700px;
  flex-wrap: nowrap;
  overflow: auto;
  justify-content: center;
  align-items: stretch;
  padding: 0;
  text-align:center;
`
const Bar = styled.div`
    width: 2px;
`


const HoverContainer = styled.div`
  width: 200px;
  heigh: 150px;
  background-color: white;
  border: 4px solid #8A2BE2;
  border-radius: 20px 40px;
  padding: 4px;
  font-size: 2em;
  text-weight: bold;
`