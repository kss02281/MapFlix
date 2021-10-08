import React, { useState } from "react";
import WorldMap from "react-svg-worldmap";
import { countryData } from "../data/Country_data";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

const tooltip = () => {};

const stylingFunction = ({ countryValue, color }) => {
  const opacityLevel = countryValue ? 1 : 0.9;
  return {
    fill:
      countryValue === 3
        ? "green"
        : countryValue === 2
        ? "yellow"
        : countryValue === 1
        ? "red"
        : color,
    fillOpacity: opacityLevel,
    stroke: "green",
    cursor: "pointer",
    border: "black",
  };
};

export default function Map1() {
  const history = useHistory();
  const clickAction = ({ countryName }) => {
    console.log(countryName);
    history.push({
      pathname: "/timeLine",
      props: { nation: countryName },
    });
  };

  return (
    <WorldMap
      color={"#868686"}
      tooltipBgColor={"#000000"}
      size="lg"
      data={countryData}
      frame={true}
      frameColor={"black"}
      styleFunction={stylingFunction}
      onClickFunction={clickAction}
      tooltipTextFunction={tooltip}
    />
  );
}
