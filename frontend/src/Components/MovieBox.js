import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BsCircleFill } from 'react-icons/bs';
import { Genre_colors } from '../data/Genre_colors'
import {Tooltip, IconButton} from '@mui/material';
//import {DeleteIcon} from '@mui/icons-material/Delete';
import '../css/ContentBox.scss';

function MovieBox () {
    const movieData = useSelector(
        state => (
            state.contentShow.content['movies']
        ),
        shallowEqual
    )
    const loading = useSelector(state => state.contentShow.loading);
    const error = useSelector(state => state.contentShow.error);

    const [movieList, setMovieList] = useState([]);
    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        console.log('saga result of movie')
        console.log(movieData)
        setMovieList(movieData)
        if(movieData != null){
            setImgSrc(movieData[0]?.poster)

        }
    },[movieData])

    const clickhandler=(e) => {
        const idx = parseInt(e.target.name);
        console.log(idx)
        console.log(movieData[idx]?.poster)
        
        setImgSrc(movieData[idx]?.poster);
    }

    return (
        <>
            {movieData === null && !loading && <p>No movie ranking list!</p>}
            {error && !loading && <p>{error}</p>}

            <h1 className="type">MOVIE</h1>
            <hr></hr>

            <div className="contentBox">
                <div className="posterBox">
                    <img className="poster" src={imgSrc}></img>
                </div>
                <div className='space'>
                </div>
                <div className="rankBox">
                    {
                        movieData?.map((movie, idx) => (
                            <div className="rankContent">
                                <div className="rankNum">
                                    {idx+1}
                                </div>
                                <a name={idx} className='rank' onClick={clickhandler}>
                                    {movie.title}
                                    <Tooltip className="circleHover" title={movie.genre[0]} onClick='undefined'>
                                        <span>
                                            <BsCircleFill size='23' style={{color:`${Genre_colors[movie.genre[0]]}`, marginLeft: '10px'}} />
                                        </span>  
                                    </Tooltip>
                                    <Tooltip className="circleHover" title={movie.genre[1]} onClick='undefined'>
                                        <span>
                                            <BsCircleFill size='23' style={{color:`${Genre_colors[movie.genre[1]]}`, marginLeft: '5px'}} />
                                        </span>  
                                    </Tooltip>
                                </a>
                                
                            </div>
                        ))
                    } 
                </div>
            </div>
        </>
    )
}

export default MovieBox;
