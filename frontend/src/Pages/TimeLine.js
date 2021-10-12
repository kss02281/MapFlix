import React, { useState, useEffect, useMemo, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import DrawBar from "../Components/DrawBar";
import BorderSelect from '../Components/BorderSelect';
import styled, {css} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHover, { Trigger, Hover } from 'react-hover';
import { FaAngleDoubleDown, FaAngleDoubleUp, FaAngleDoubleLeft } from 'react-icons/fa';
import { HiCursorClick } from 'react-icons/hi';
import { BsCircleFill } from 'react-icons/bs';

import { setDate } from '../redux/actions/yearWeek'

import queryString from 'query-string'; 
import '../css/TimeLine.scss';


function DrawBarChart(props) {
  const dispatch = useDispatch();
  const [cnt, setCnt] = useState(0);
  const [coronaData, setCoronaData] = useState([]);
  const [maxVal, setMaxVal] = useState(0);

  const [ratio, setRatio] = useState(1);


  const genre_colors = {
    'Comedy':'#FFFF96',
    'Adventure':'#FFE650',
    'Talk-Show':'#FFE5CB',
    'Family':'#FFCAD5',
    'Animation':'#FFB900',
    'Reality-TV':'#FF9E9B',
    'Romance':'#FF88A7',
    'Action':'#FF5675',
    'Musical':'#F0B469',
    'Western':'#FF6666',
    'Sci-Fi':'#DDDDDD',
    'War':'#D27D32',
    'Crime':'#CAB2DB',
    'Thriller':'#BECDFF',
    'Fantasy':'#ACF3FF',
    'Horror':'#AAEBAA',
    'Biography':'#A8F552',
    'Mystery':'#9D71BD',
    'Drama':'#93DAFF',
    'Documentary':'#78A9ED',
    'News':'#68D168',
    'Game-Show':'#65FFBA',
    'Military':'#369F36',
    'History':'#14D3FF',
    'Sport':'#00BFFF'
  }



  useMemo(() => {
    console.log('/timeline/'+props.nationCode);
    console.log(props.nationCode);
    console.log(props.nation);
    fetch('/timeline/'+props.nationCode).then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => setCoronaData(data.map(item => {
        return {week: item.week, confirmedCnt: item.confirmed}
    })))
    
    console.log(coronaData)
    setCnt(1);
  },[cnt])


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

  return (
      <div className='timeline'>
          <span className="nationName">{props.nation}'s</span>
          <span className="title"> confirmed people by week</span>
          <ChartContainer maxHeight={maxVal}>
            {
              coronaData.map((item, idx) => (
                <>
                  <Bar />
                  <ReactHover options={optionsCursorTrueWithMargin}>
                    <Trigger type="trigger">
                      <DrawBar
                        confirmedCnt={item.confirmedCnt}
                        maxHeight={maxVal}
                        ratio={ratio}
                        onClick={() => {
                          console.log(item.week);
                          const [year, week] = [parseInt(item.week.slice(0,4)), parseInt(item.week.slice(5,8))];
                          console.log(year, week)
                          dispatch(setDate({
                            'year': year, 
                            'week': week
                          }))
                          const content = document.getElementById('content');
                          window.scrollBy({top: content.getBoundingClientRect().top, behavior: 'smooth'});
                        }}
                      />
                    </Trigger>
                    <Hover type='hover'>
                      <div className='hoverContainer'>
                        <p className='hover'>{props.nation}</p>
                        <p className='hover'>{item.week}</p>
                        <p className='hover'>Confirmed People : {item.confirmedCnt}</p>
                      </div>
                    </Hover>
                  </ReactHover>
                </>
              ))
            }
            <div className='genrecolor'>

              {
                Object.entries(genre_colors).map(([key, value])=>(
                  <div className='colorlist'>
                    {key}
                    <div className='circle'><BsCircleFill color={value}/></div>
                  </div>
                ))
              }
              
            </div>
          </ChartContainer>
          <div className='year'>
            <div>2020</div>
            <div>2021</div>
          </div>
      </div>
  )
}

const TimeLine = ({ history, location, match }) => {
  const query = queryString.parse(location.search)
  console.log(query)
  const { nation, nationCode } = query;

  const { year, week } = useSelector(
    state => ({
      year: state.yearWeek.year, week: state.yearWeek.week
    }),
    shallowEqual
  )
  

  const goToMain = () => {
    history.push("/");
  }

  const clickToScrollUp = () => {
    const root = document.getElementById('root');
    window.scrollBy({top: root.getBoundingClientRect().top - 30, behavior: 'smooth'});
  }

  return (
    <div>
      <button className='arrowButton' onClick={goToMain}><FaAngleDoubleLeft className='arrowIcon'/>Go To Main Page</button>
      {/* <BorderSelect styled={{color: 'white'}}/> */}
      <DrawBarChart nation={nation} nationCode={nationCode}/>
      <Container>
        <h1 className='guide'>Click on the stick for details by week <HiCursorClick/></h1>
        <FaAngleDoubleDown className='arrowIcon'/>
        <div id='contentContainer'>
          <h1>{year}, WEEK {week}</h1>
          <div id='content'>
            <div className='movie'>Movie</div>
            <div className='updown'></div>
            <div className='show'>Show</div>
          </div>
        </div>
        
        <button className='arrowButton' onClick={clickToScrollUp}><FaAngleDoubleUp className='arrowIcon'/></button>
      </Container>
    </div>
  );
};

export default TimeLine;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
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
    height: 300px;
`
