import React, { useState } from "react";
import WorldMap from "react-svg-worldmap";
import { countryData } from "../data/Country_data";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

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

// const getLocalizedText = ({ countryCode, countryValue, data1, data2 }) => {
//   const localizedCountryName = localizedCountryDictionary.has(
//     countryCode.toLocaleLowerCase()
//   )
//     ? localizedCountryDictionary.get(countryCode.toLocaleLowerCase())
//     : "Unknown";
//   const covidData1 = localizedCountryDictionary.has(data1)
//     ? localizedCountryDictionary.get(data1)
//     : "Unknown";
//   const covidTranlation =
//     localizedCountryName +
//     "  금일확진자 : " +
//     covidData1 +
//     ", 누적확진자 : " +
//     "테스트";
//   return covidTranlation;
// };

// const tooltipFunction = ({ countryCode, countryValue, prefix, suffix }) => {};

export default function Map() {
  const history = useHistory();
  const clickAction = ({ countryName, countryCode, countryValue }) => {
    console.log(countryName);
    history.push({
      pathname: "/timeLine",
      props: { 
        nation: countryName,
        nationCode: countryCode.toLowerCase() },
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
      // tooltipTextFunction={getLocalizedText}
    />
  );
}
