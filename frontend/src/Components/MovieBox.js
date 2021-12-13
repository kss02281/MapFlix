import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { BsCircleFill } from 'react-icons/bs';
import { Genre_colors } from '../data/Genre_colors';
import { Tooltip } from '@mui/material';
import Title from './Title';
import '../css/ContentBox.scss';

function MovieBox() {
  const movieData = useSelector((state) => state.contentShow.content['movies'], shallowEqual);
  const loading = useSelector((state) => state.contentShow.loading);
  const error = useSelector((state) => state.contentShow.error);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    if (movieData != null) {
      if (movieData[0]) {
        if (movieData[0].title === 'No Data') {
          console.log('No Data');
          setImgSrc('../img/1.png');
        } else {
          setImgSrc(movieData[0]?.poster);
        }
      }
    }
  }, [movieData]);

  const clickhandler = (e) => {
    const idx = parseInt(e.target.id);
    setTimeout(() => {
      setImgSrc(movieData[idx]?.poster);
    }, 200);
  };

  return (
    <>
      {movieData === null && !loading && <p>No movie ranking list!</p>}
      {error && !loading && <p>{error}</p>}

      <h1 className="hoverTitle">MOVIE</h1>
      <hr></hr>

      <div className="contentBoxT">
        <div className="posterBoxT">
          <img alt="poster" className="posterT" src={imgSrc}></img>
        </div>
        <div className="spaceT"></div>
        <div className="rankBoxT">
          {movieData?.map((movie, idx) => (
            <div className="rankContentT">
              <div className="rankNumT">{idx + 1}</div>
              <a href className="rankT">
                <button className="titleButton" name={idx} onClick={clickhandler}>
                  <Title id={idx} title={movie.title} />
                </button>

                <Tooltip className="circleHoverT" title={movie.genre[0]} onClick="undefined">
                  <span>
                    <BsCircleFill size="23" style={{ color: `${Genre_colors[movie.genre[0]]}`, marginLeft: '10px' }} />
                  </span>
                </Tooltip>
                <Tooltip className="circleHoverT" title={movie.genre[1]} onClick="undefined">
                  <span>
                    <BsCircleFill size="23" style={{ color: `${Genre_colors[movie.genre[1]]}`, marginLeft: '5px' }} />
                  </span>
                </Tooltip>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieBox;
