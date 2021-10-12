import React, { useState, useEffect, useMemo, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import "../css/MapHover.scss";

const data = [
  {
    name: "2021 Q1",
    pv: 1654846,
  },
  {
    name: "2021 Q2",
    pv: 1854698,
  },
];

function MapHover(props) {
  const nationName = props.nationName;
  const nationCode = props.nationCode;
  console.log(nationName);
  return (
    <div>
      <div className="countryName">{nationName}</div>
      <div className="hover_Wrap">
        <div className="leftBox">
          <div className="leftText">
            <p className="subscibes">Subscibes</p>
            <p className="total_Subscibes">{data[1].pv}</p>
            <p className="increase_Subscibes">{data[1].pv - data[0].pv}</p>
          </div>
          <div className="subscribes_Chart">
            <BarChart width={230} height={150} data={data}>
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
