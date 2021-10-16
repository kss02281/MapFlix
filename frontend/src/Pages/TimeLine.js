import React, { useState, useEffect, useMemo, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import DrawBar from "../Components/DrawBar";
import MovieBox from "../Components/MovieBox";
import ShowBox from "../Components/ShowBox";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaAngleDoubleLeft,
} from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { BsCircleFill } from "react-icons/bs";

import { Genre_colors } from "../data/Genre_colors";
import { setDate } from "../Redux/actions/yearWeek";
import { getContentShow } from "../Redux/actions/contentShow";
import { getTopContentList } from "../Redux/actions/topContentList";

import { weekDate } from "../data/Week_date";
import queryString from "query-string";
import "../css/TimeLine.scss";
import DropDownMenu from "../Components/DropDownMenu";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function DrawBarChart(props) {
  const dispatch = useDispatch();
  const [cnt, setCnt] = useState(0);
  const [coronaData, setCoronaData] = useState([]);
  const [maxVal, setMaxVal] = useState(0);

  const [ratio, setRatio] = useState(1);
  const topContent = useSelector(
    (state) => state.topContentList.topContent,
    shallowEqual
  );

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
            return { week: item.week, confirmedCnt: Math.sqrt(item.confirmed) };
          })
        )
      );

    dispatch(
      setDate({
        year: "2021",
        week: "39",
        date: "Sep 27 - Oct 3",
      })
    );
    dispatch(
      getContentShow({ nationCode: props.nationCode, week: "2021-039" })
    );

    setCnt(1);

    console.log(topContent["2020-040"]);
  }, [cnt, props.nationCode]);

  useEffect(() => {
    const confirmedList = coronaData.map((item) => item.confirmedCnt);
    console.log(confirmedList);
    confirmedList.sort(function (a, b) {
      return parseInt(a - b);
    });
    setMaxVal(confirmedList[confirmedList.length - 2]);

    setRatio(maxVal / 400);
    console.log(confirmedList[confirmedList.length - 2]);
  }, [coronaData]);

  return (
    <div className="timeline">
      <span className="nationName">{props.nation}'s</span>
      <div className="DaT"></div>
      <span className="title"> confirmed people by week</span>
      <ChartContainer maxHeight={maxVal}>
        <div style={{ width: "380px" }}></div>
        {coronaData.map((item, idx) => (
          <>
            <Bar />
            <DrawBar
              countryCode={props.nationCode}
              fullweek={item.week}
              year={parseInt(item.week.slice(0, 4))}
              week={parseInt(item.week.slice(5, 8))}
              confirmedCnt={item.confirmedCnt}
              maxHeight={maxVal}
              ratio={ratio}
              onClick={() => {
                const [year, week] = [
                  parseInt(item.week.slice(0, 4)),
                  parseInt(item.week.slice(5, 8)),
                ];
                dispatch(
                  setDate({
                    year: year,
                    week: week,
                    date: weekDate[item.week],
                  })
                );
                dispatch(
                  getContentShow({
                    nationCode: props.nationCode,
                    week: item.week,
                  })
                );

                const content = document.getElementById("content");
                window.scrollBy({
                  top: content.getBoundingClientRect().top,
                  behavior: "smooth",
                });
              }}
            />
          </>
        ))}
        <div className="genrecolor">
          {Object.entries(Genre_colors).map(([key, value]) => (
            <div className="colorlist">
              {key}
              <div className="circle">
                <BsCircleFill color={value} />
              </div>
            </div>
          ))}
        </div>
      </ChartContainer>
      <div className="year">
        <div>2020</div>
        <div>2021</div>
      </div>
    </div>
  );
}

const TimeLine = ({ history, location }) => {
  const query = queryString.parse(location.search);
  console.log(query);
  const { nation, nationCode } = query;

  const { year, week, date } = useSelector(
    (state) => ({
      year: state.yearWeek.year,
      week: state.yearWeek.week,
      date: state.yearWeek.date,
    }),
    shallowEqual
  );

  const goToMain = () => {
    history.push("/");
  };

  const clickToScrollUp = () => {
    const root = document.getElementById("root");
    window.scrollBy({
      top: root.getBoundingClientRect().top - 30,
      behavior: "smooth",
    });
  };

  const handleGenreButton = () => {
    const root = document.getElementById("root");
    window.scrollBy({
      top: root.getBoundingClientRect().top,
      behavior: "smooth",
    });
    history.push("/GenreAnalysis/nationInfo?nation=World&nationCode=world");
  };

  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href =
    "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
  document.head.appendChild(styleLink);

  return (
    <div>
      <button className="arrowButton" onClick={goToMain}>
        <FaAngleDoubleLeft className="arrowIcon" />
        <a href="/">Go To Main Page</a>
      </button>
      <DropDownMenu />
      <DrawBarChart nation={nation} nationCode={nationCode} />

      <Container>
        <h1 className="guide">
          Click on the stick for details by week <HiCursorClick />
        </h1>
        <div className="DaT"></div>
        <FaAngleDoubleDown className="arrowIcon" />
        <div id="contentContainer">
          <h1 className="contentBox">
            WEEK {week} ({date}, {year})
          </h1>

          <div id="content">
            <div className="movie">
              <MovieBox />
            </div>
            <div className="updown"></div>
            <div className="show">
              <ShowBox />
            </div>
          </div>
        </div>
        <div className="bottomContent">
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              className="genreButton"
              onClick={handleGenreButton}
            >
              Go To Genre-Analysis Page
            </Button>
          </Stack>
          <div style={{ width: "500px" }}></div>
          <button className="arrowButton" onClick={clickToScrollUp}>
            <FaAngleDoubleUp className="arrowIcon" />
          </button>
          <div style={{ width: "800px" }}></div>
        </div>
      </Container>
    </div>
  );
};

export default TimeLine;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 700px;
  flex-wrap: nowrap;
  overflow: auto;
  justify-content: center;
  align-items: stretch;
  padding: 0;
  text-align: center;
`;
const Bar = styled.div`
  width: 2px;
  height: 300px;
`;
