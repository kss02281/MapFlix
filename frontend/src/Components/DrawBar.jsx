import React, { memo, useEffect, useState } from "react";
import styled, { css } from "styled-components";

function DrawBar(props) {
  const maxHeight = props.maxHeight;
  const idx = props.idx;


  const confirmedCnt = props.confirmedCnt;
  const onClickAction = props.onClick;
  const ratio = props.ratio;
 
  const fullweek = props.fullweek;
  const week = props.week;
  const year = props.year;
  const countryCode = props.countryCode;
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    if (year === 2020 && week < 33) {
      setColor('#ffffff')
    }else if (year === 2021 && week === 1 && countryCode != 'kr'){
      setColor('#ffffff')
    }else {
      fetch("/netflix/" + countryCode + "/" + fullweek + "/genre")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          //console.log(data?.color);
          setColor(data?.color);
        });
    }
  }, [week]);


  return (
    <>
      <Bar
        confirmedCnt={confirmedCnt}
        ratio={ratio}
        onClick={onClickAction}
        color={color}
      ></Bar>
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
