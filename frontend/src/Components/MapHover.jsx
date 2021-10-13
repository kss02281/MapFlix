import React, { useState, useEffect, useMemo, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import "../css/MapHover.scss";

function MapHover(props) {
  const [subscibesQ1, setSubscibesQ1] = useState(0);
  const [subscibesQ2, setSubscibesQ2] = useState(0);
  const nationName = props.nationName;
  const nationCode = props.nationCode;

  const subscibes_data = [
    {
      name: "2021 Q1",
      pv: subscibesQ1,
    },
    {
      name: "2021 Q2",
      pv: subscibesQ2,
    },
  ];
  useMemo(() => {
    console.log("/netflix/" + nationCode);
    fetch("/netflix/" + nationCode)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return { q1_subscribers: 0, q2_subscribers: 0 };
        }
      })
      .then((data) => {
        setSubscibesQ1(data.q1_subscribers);
        setSubscibesQ2(data.q2_subscribers);
      });
  });

  return (
    <div>
      <div className="countryName">{nationName}</div>
      <div className="hover_Wrap">
        <div className="leftBox">
          <div className="leftText">
            <p className="subscibesText">Subscibes</p>
            <p className="total_Subscibes">{subscibes_data[1].pv}</p>
            <p className="increase_Subscibes">
              {subscibes_data[1].pv - subscibes_data[0].pv}
            </p>
          </div>
          <div className="subscribes_Chart">
            <BarChart width={230} height={150} data={subscibes_data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="pv" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="rightBox">
          <div className="topMovieBox">
            <img className="movieImage"></img>
            <p className="topMovie">Top Movie</p>
            <p className="movieTitle">Title </p>
          </div>
          <div className="topShowBox">
            <img className="showImage"></img>
            <p className="topShow">Top Show</p>
            <p className="ShowTitle">Title </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapHover;
