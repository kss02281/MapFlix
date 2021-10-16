import React, { useState, useMemo } from "react";
import "../css/MapHoverYellow.scss";
import Title from "./Title";

function MapHoverYellow(props) {
  const [movieURL, setMovieURL] = useState("");
  const [showURL, setShowURL] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [showTitle, setShowTitle] = useState("");
  const [movieId, setMovieId] = useState("");
  const [showId, setShowId] = useState("");
  const nationName = props.nationName;
  const nationCode = props.nationCode;

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
        setMovieId(movie.id);
        setShowId(show.id);
      });
  });
  return (
    <div className="MapHoverYellow_Wrap">
      <div className="countryName">{nationName}</div>
      <div className="noSubscibesData">No Subscibes Data</div>
      <div className="hover_Wrap">
        <div className="leftBox">
          <div className="topMovieBox">
            <div className="movieImageBox">
              <img className="movieImage" src={movieURL}></img>
            </div>
            <div className="movieTextBox">
              <div className="topMovie">Top Movie</div>
              <div className="movieTitle">
                <Title title={movieTitle} id={movieId} />
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="rightBox">
          <div className="topShowBox">
            <div className="showImageBox">
              <img className="showImage" src={showURL}></img>
            </div>
            <div className="showTextBox">
              <div className="topShow">Top Show</div>
              <div className="ShowTitle">
                <Title title={showTitle} id={showId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapHoverYellow;
