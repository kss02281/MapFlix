import React, { memo, useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import styled, { css } from "styled-components";
import TimelineHoverBox from "./TimelineHoverBox";
import ReactHover, { Trigger, Hover } from "react-hover";

function DrawBar(props) {
  const confirmedCnt = props.confirmedCnt;
  const onClickAction = props.onClick;
  const ratio = props.ratio;

  const fullweek = props.fullweek;
  const week = props.week;
  const year = props.year;
  const countryCode = props.countryCode;
  const [color, setColor] = useState("#ffffff");
  const [movie, setMovie] = useState([]);
  const [show, setShow] = useState([]);

  const contentList = useSelector(
    (state) => state.topContentList.topContent,
    shallowEqual
  );

  useEffect(() => {
    fetch("/api/netflix/" + countryCode + "/" + fullweek + "/genre")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data?.color);
        setColor(data?.color);
      });
  }, [week, countryCode]);

  const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0,
  };

  return (
    <>
      <ReactHover options={optionsCursorTrueWithMargin}>
        <Trigger>
          <Bar
            confirmedCnt={confirmedCnt}
            ratio={ratio}
            onClick={onClickAction}
            color={color}
            onMouseEnter={() => {
              console.log("hi");
              console.log(contentList[fullweek]);
              if (contentList[fullweek]) {
                setMovie(contentList[fullweek][0]);
                setShow(contentList[fullweek][1]);
              }
            }}
          ></Bar>
        </Trigger>
        <Hover>
          <TimelineHoverBox
            nation={props.nation}
            nationCode={props.nationCode}
            fullWeek={fullweek}
            movie={movie}
            show={show}
            confirmedCnt={parseInt(confirmedCnt ** 2)}
          />
        </Hover>
      </ReactHover>
    </>
  );
}

export default memo(DrawBar);

const Bar = styled.div`
  width: 12px;
  height: ${(props) => Math.round(props.confirmedCnt / props.ratio)}px;
  margin-top: ${(props) =>
    280 - Math.round(props.confirmedCnt / props.ratio) / 2}px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border-radius: 60px 60px;

  &:hover {
    opacity: 0.7;
  }
`;
