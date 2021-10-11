import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Title_logo from "../img/title.png";
import Map from "../Components/Map";
import NavBar from "../Components/NavBar";
import ReactTooltip from "react-tooltip";

const Main = ({ history }) => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="header" style={{ textAlign: "center" }}>
        <p className="headtext" style={{ fontSize: "1.5em" }}>
          How many Netflix subscribers have increased before and after Covid-19?{" "}
          <br />
          I'll show you the top 10 contents of weekly Netflix in each country.
        </p>
        <img src={Title_logo} alt="" />
      </div>
      <NavBar />
      <div className="map_wrap" style={{ textAlign: "center" }}>
        <Map></Map>
      </div>

      <div className="Explanation" style={{ fontSize: "1.4em" }}>
        <p>
          1. Streaming service is not available in the country, therefore
          COVID-MAPFLIX has no charts.
        </p>
        <p>
          2. Streaming service is available in the country, but no popularity
          ranking is provided, therefore COVID-MAPFLIX has no charts.
        </p>
        <p>
          3. Streaming service is available in the country, COVID-MAPFLIX has
          daily updated charts.
        </p>
      </div>
    </div>
  );
};

export default Main;
