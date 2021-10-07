import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Title_logo from "../img/title.png";
import Map from "../Components/Map";

const Main = ({ history }) => {
  return (
    <div>
      <div className="header">
        <p className="headtext">
          너는 아니 How many Netflix subscribers have increased before and after
          Covid-19? <br />
          우리는 팬데믹 동안의 너가 선택한 국가의 넷플릭스 가입자 수 증가를
          보여줄거고 <br />
          and 그 국가의 주간 넷플릭스의 탑클라스 콘텐츠를 알려줄거야
        </p>
        <img src={Title_logo} />
      </div>
      <div className="map_wrap">
        <Map></Map>
      </div>
      <div className="Explanation">
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
