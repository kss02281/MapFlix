import React, { useState, useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import GenreDrawBar from "../Components/GenreDrawBar";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactHover, { Trigger, Hover } from "react-hover";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { setDate } from "../Redux/actions/yearWeek";
import { Genre_colors } from "../data/Genre_colors";

import queryString from "query-string";
import "../css/GenreTimeLine.scss";

function DrawBarChart(props) {
  const dispatch = useDispatch();
  const [cnt, setCnt] = useState(0);
  const [coronaData, setCoronaData] = useState([]);
  const [maxVal, setMaxVal] = useState(0);

  const [ratio, setRatio] = useState(1);

  useMemo(() => {
    console.log("/timeline/" + props.nationCode);
    console.log(props.nationCode);
    console.log(props.nation);
    fetch("/timeline/" + props.nationCode)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) =>
        setCoronaData(
          data.map((item) => {
            return { week: item.week, confirmedCnt: item.confirmed };
          })
        )
      );

    console.log(coronaData);
    setCnt(1);
  }, [cnt]);

  useEffect(() => {
    const confirmedList = coronaData.map((item) => item.confirmedCnt);
    confirmedList.sort(function (a, b) {
      return parseInt(a - b);
    });
    setMaxVal(confirmedList[confirmedList.length - 1]);

    setRatio(maxVal / 400);
    console.log(confirmedList[confirmedList.length - 1]);
  }, [coronaData]);

  const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0,
  };
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);

  return (
<<<<<<< HEAD
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
                        <p className='hoverG'>Confirmed People : {item.confirmedCnt}</p>
                      </div>
                    </Hover>
                  </ReactHover>
                </>
              ))
            }
          </ChartContainerG>
          
=======
    <div className="timeline">
      <span className="nationName">{props.nation}'s</span>
      <div className="DaT">
        <span className="title"> confirmed people by week</span>
>>>>>>> c248a8eaa6dc0256550790ac711e7081d68acaad
      </div>
      <ChartContainer maxHeight={maxVal}>
        {coronaData.map((item, idx) => (
          <>
            <Bar />
            <ReactHover options={optionsCursorTrueWithMargin}>
              <Trigger type="trigger">
                <GenreDrawBar
                  confirmedCnt={item.confirmedCnt}
                  maxHeight={maxVal}
                  ratio={ratio}
                  onClick={() => {
                    console.log(item.week);
                    const [year, week] = [
                      parseInt(item.week.slice(0, 4)),
                      parseInt(item.week.slice(5, 8)),
                    ];
                    console.log(year, week);
                    dispatch(
                      setDate({
                        year: year,
                        week: week,
                      })
                    );
                    const content = document.getElementById("content");
                    window.scrollBy({
                      top: content.getBoundingClientRect().top,
                      behavior: "smooth",
                    });
                  }}
                />
              </Trigger>
              <Hover type="hover">
                <div className="hoverContainer">
                  <p className="hover">{props.nation}</p>
                  <p className="hover">{item.week}</p>
                  <p className="hover">
                    Confirmed People : {item.confirmedCnt}
                  </p>
                </div>
              </Hover>
            </ReactHover>
          </>
        ))}
      </ChartContainer>
    </div>
  );
}

const GenreTimeLine = ({ history, location, match }) => {
  const query = queryString.parse(location.search);
  console.log(query);
  const { nation, nationCode } = query;

  const { year, week } = useSelector(
    (state) => ({
      year: state.yearWeek.year,
      week: state.yearWeek.week,
    }),
    shallowEqual
<<<<<<< HEAD
  )
  
  return (
    <div>
      <DrawBarChart nation={nation} nationCode={nationCode}/>
=======
  );

  const clickToScrollUp = () => {
    const root = document.getElementById("root");
    window.scrollBy({
      top: root.getBoundingClientRect().top - 30,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <DrawBarChart nation={nation} nationCode={nationCode} />
      <ContainerT>
        <h1 className="guide">
          Click on the stick for details by week <HiCursorClick />
        </h1>
        <FaAngleDoubleDown className="arrowIcon" />
        <div id="contentContainerT">
          <h1>
            {year}, WEEK {week}
          </h1>
          <div id="content">
            <div className="movie">Movie</div>
            <div className="updown"></div>
            <div className="show">Show</div>
          </div>
        </div>

        <button className="arrowButton" onClick={clickToScrollUp}>
          <FaAngleDoubleUp className="arrowIcon" />
        </button>
      </ContainerT>
>>>>>>> c248a8eaa6dc0256550790ac711e7081d68acaad
    </div>
  );
};

export default GenreTimeLine;

<<<<<<< HEAD
const ChartContainerG = styled.div`
=======
const ContainerT = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

const ChartContainer = styled.div`
>>>>>>> c248a8eaa6dc0256550790ac711e7081d68acaad
  display: flex;
  flex-direction: row;
  height: 700px;
  flex-wrap: nowrap;
  overflow: auto;
  padding: 0;
  align-items: flex-start;
<<<<<<< HEAD
`
const BarG = styled.div`
    width: 2px;
    height: 300px;
`
=======
`;
const Bar = styled.div`
  width: 2px;
  height: 300px;
`;
>>>>>>> c248a8eaa6dc0256550790ac711e7081d68acaad
