import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { BsCircleFill } from 'react-icons/bs';
import { Genre_colors } from '../data/Genre_colors';
import { Tooltip, IconButton } from '@mui/material';
import Title from './Title';
//import {DeleteIcon} from '@mui/icons-material/Delete';
import '../css/ContentBox.scss';

function ShowBox() {
  const tvshowData = useSelector((state) => state.contentShow.content['tv_shows'], shallowEqual);
  const loading = useSelector((state) => state.contentShow.loading);
  const error = useSelector((state) => state.contentShow.error);

  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    if (tvshowData != null) {
      if (tvshowData[0]) {
        if (tvshowData[0].title === 'No Data') {
          console.log('No Data');
          setImgSrc('../img/1.png');
        } else {
          setImgSrc(tvshowData[0]?.poster);
        }
      }
    }
  }, [tvshowData]);

  const clickhandler = (e) => {
    const idx = parseInt(e.target.id);
    setTimeout(() => {
      setImgSrc(tvshowData[idx]?.poster);
    }, 200);
  };

  return (
    <>
      {tvshowData === null && !loading && <p>No movie ranking list!</p>}
      {error && !loading && <p>{error}</p>}

      <h1 className="hoverTitle">TVSHOWS</h1>
      <hr></hr>

      <div className="contentBoxT">
        <div className="posterBoxT">
          <img alt="poster" className="posterT" src={imgSrc}></img>
        </div>
        <div className="spaceT"></div>
        <div className="rankBoxT">
          {tvshowData?.map((show, idx) => (
            <div className="rankContentT">
              <div className="rankNumT">{idx + 1}</div>
              <a className="rankT">
                <button className="titleButton" name={idx} onClick={clickhandler}>
                  <Title id={idx} title={show.title} />
                </button>
                <Tooltip className="circleHoverT" title={show.genre[0]} onClick="undefined">
                  <span>
                    <BsCircleFill size="23" style={{ color: `${Genre_colors[show.genre[0]]}`, marginLeft: '10px' }} />
                  </span>
                </Tooltip>
                <Tooltip className="circleHoverT" title={show.genre[1]} onClick="undefined">
                  <span>
                    <BsCircleFill size="23" style={{ color: `${Genre_colors[show.genre[1]]}`, marginLeft: '5px' }} />
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

export default ShowBox;
