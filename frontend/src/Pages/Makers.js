import React from "react";
import Jae from "../img/Jae.jpg"
import Nam from "../img/Nam.png"
import hyo from "../img/hyo.jpg"
import yoon from "../img/yoon.jpg"
import sunye from "../img/sunye.jpg"

import '../css/Makers.scss';

function Makers() {
  

  return (
    <div className="All">
      <div className="Team">
        Who made it?
        </div>
        
      <div className="people">
        <div className="person">
        <div className="Leader">LEADER</div>
        <img className="Profile" src={Nam} alt="" onClick={() => window.open('https://github.com/diagram298', '_blank')}/>
        <div className="NAME">남정윤</div>
        <div className="MpositionD">DATA-ANALYSIS</div>
        </div>
        <div className="person">
          
        <div className="Remainder">-</div>
          <img className="Profile" src={hyo}alt="" onClick={() => window.open('https://github.com/dudejrtjdrp', '_blank')}/>
        <div className="NAME">이성효</div>
        <div className="MpositionF">FRONTEND</div>
        </div>
        <div className="person">
          
        <div className="Remainder">-</div>
          <img className="Profile" src={yoon} alt="" onClick={() => window.open('https://github.com/Jaenk-99', '_blank')}/>
        <div className="NAME">윤석준</div>
        <div className="MpositionD">DATA-ANALYSIS</div>
        <div className="SpositionB">BACKEND</div>
        </div>
        <div className="person">
          
        <div className="Remainder">-</div>
          <img className="Profile" src={sunye} alt="" onClick={() => window.open('https://github.com/kss02281', '_blank')}/>
        <div className="NAME">이선예</div>
        <div className="MpositionF">FRONTEND</div>
        </div>
        <div className="person">
          
        <div className="Remainder">-</div>
          <img className="Profile" src={Jae} alt="" onClick={() => window.open('https://github.com/Jaenk-99', '_blank')}/>
          
        <div className="NAME">김재현</div>
        <div className="MpositionF">FRONTEND</div>
        </div>
        <div className="person">
          
        <div className="Remainder">-</div>
          <img className="Profile" src="https://pbs.twimg.com/profile_images/1301872241773142016/a50FgV9S_400x400.jpg"alt="" onClick={() => window.open('https://github.com/Jaenk-99', '_blank')}/>
        <div className="NAME">김민지</div>
        <div className="MpositionB">BACKEND</div>
      </div>
    </div>
    </div>
  );
}

export default Makers;
