import React, { memo, useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';
import TimelineHoverBox from './TimelineHoverBox';
import ReactHover, { Trigger, Hover } from 'react-hover';

function DrawBar(props) {
  const confirmedCnt = props.confirmedCnt;
  const onClickAction = props.onClick;
  const ratio = props.ratio;

  const fullweek = props.fullweek;
  const week = props.week;
  const year = props.year;
  const countryCode = props.countryCode;
  const [color, setColor] = useState('#ffffff');
  const [movie, setMovie] = useState([]);
  const [show, setShow] = useState([]);

  const contentList = useSelector((state) => {
    return state.topContentList.topContent;
  }, shallowEqual);

  useEffect(() => {
    fetch(process.env.REACT_APP_DB_HOST + '/api/netflix/' + countryCode + '/' + fullweek + '/genre')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setColor(data?.color);
      });
  }, [week, countryCode, fullweek]);

  const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0,
  };

  return (
    <>
      <Bar
        confirmedCnt={confirmedCnt}
        ratio={ratio}
        onClick={onClickAction}
        color={color}
        onMouseEnter={() => {
          console.log(contentList[fullweek]);
          if (contentList[fullweek]) {
            setMovie(contentList[fullweek][0]);
            setShow(contentList[fullweek][1]);
          }
        }}
      ></Bar>
    </>
  );
}

export default DrawBar;

const Bar = styled.div`
  width: 12px;
  height: ${(props) => Math.round(props.confirmedCnt / props.ratio)}px;
  margin-top: ${(props) => 280 - Math.round(props.confirmedCnt / props.ratio) / 2}px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border-radius: 60px 60px;

  &:hover {
    opacity: 0.7;
  }
`;
