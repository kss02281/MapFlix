
import React, { memo, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import "../css/GenreBar.scss";
import styled, { css } from "styled-components";

function GenreItem(props) {
  return (
    <div className="GenreItems">
        <>
        <div></div>
    </>
  );
    </div>
  );
}

export default GenreItem;

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