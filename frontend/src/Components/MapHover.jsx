import React, { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import "../css/MapHover.scss";

function MapHover(props) {
  const [subscibesQ1, setSubscibesQ1] = useState(0);
  const [subscibesQ2, setSubscibesQ2] = useState(0);
  const [movieURL, setMovieURL] = useState("");
  const [showURL, setShowURL] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [showTitle, setShowTitle] = useState("");
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
        }
      })
      .then((data) => {
        setSubscibesQ1(data.q1_subscribers);
        setSubscibesQ2(data.q2_subscribers);
      });
  });

  useMemo(() => {
    console.log("/netflix/" + nationCode + "/2021-040/top1");
    fetch("/netflix/" + nationCode + "/2021-040/top1")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const movie = data[0];
        const show = data[1];
        setMovieURL(movie.poster);
        setShowURL(show.poster);
        setMovieTitle(movie.title);
        setShowTitle(show.title);
      });
  });
  const increase_Subscibes_Data = subscibes_data[1].pv - subscibes_data[0].pv;
  const increase_Color =
    increase_Subscibes_Data > 0
      ? "red"
      : increase_Subscibes_Data == 0
      ? "black"
      : "blue";
  return (
    <div className="MapHover_Wrap">
      <div className="countryName">{nationName}</div>
      <div className="hover_Wrap">
        <div className="leftBox">
          <div className="leftText">
            <p className="subscibesText">Subscibes</p>
            <p className="total_Subscibes">{subscibes_data[1].pv}</p>
            <p className="increase_Subscibes" style={{ color: increase_Color }}>
              {increase_Subscibes_Data}
            </p>
          </div>
          <div className="subscribes_Chart">
            <div className="subscribes_Chart_Box">
              <BarChart width={250} height={200} data={subscibes_data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="pv" fill="#8884d8" />
              </BarChart>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="rightBox">
          <div className="topMovieBox">
            <div className="movieImageBox">
              <img className="movieImage" src={movieURL}></img>
            </div>
            <div className="movieTextBox">
              <div className="topMovie">Top Movie</div>
              <div className="movieTitle">{movieTitle}</div>
            </div>
          </div>
          <div className="topShowBox">
            <div className="showImageBox">
              <img className="showImage" src={showURL}></img>
            </div>
            <div className="showTextBox">
              <div className="topShow">Top Show</div>
              <div className="ShowTitle">{showTitle}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapHover;
