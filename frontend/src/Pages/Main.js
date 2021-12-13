import React from "react";
import Title_logo from "../img/title.png";
import Map from "../Components/Map";
import { BsCircleFill } from "react-icons/bs";
import "../css/main.scss";
import MapHoverGreen from "../Components/MapHoverGreen";
import Navbar from "../NavBar";

const Main = ({ history }) => {
  return (
    <div className="mainWrap">
      <div className="header">
        <img src={Title_logo} alt="" />
        <p className="Explanation_text">
            <p className="ExplanationText1">
              How many Netflix subscribers have increased before and after
              Covid-19? 
            </p>
            <p className="ExplanationText2">
              We'll show you the top 10 contents of weekly Netflix in each
              country.
            </p>
          </p>
      </div>
      <div className='mainBackground'>
        <div className='mainBackgroundBlack'></div>
        <div className='mainBackgroundWhite'></div>
      </div>
      <div className='mapContainer'>
        <div className="map_wrap">
          <Map></Map>
        </div>

        <div className="Explanation_Wrap">
          <div className="Explanation">
            <div className="Explanation_list">
              <div className="Explanation_green">
                <BsCircleFill color="rgb(5, 150, 105)" />
                <p>Netflix Streaming</p>
              </div>
              <div className="Explanation_yellow">
                <BsCircleFill color="rgb(245, 158, 11)" />
                <p>No Subscribes</p>
              </div>
              <div className="Explanation_red">
                <BsCircleFill color="rgb(220, 38, 38)" />
                <p>No Ranking</p>
              </div>
              <div className="Explanation_gray">
                <BsCircleFill color="#aaaaaa" />
                <p>No Netflix</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
