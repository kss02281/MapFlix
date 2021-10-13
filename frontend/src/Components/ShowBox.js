import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { BsCircleFill } from 'react-icons/bs';
import { Genre_colors } from '../data/Genre_colors'
import {Tooltip, IconButton} from '@mui/material';
//import {DeleteIcon} from '@mui/icons-material/Delete';
import '../css/ContentBox.scss';

function ShowBox () {
    const tvshowData = useSelector(
        state => (
            state.contentShow.content['tv_shows']
        ),
        shallowEqual
    )
    const loading = useSelector(state => state.contentShow.loading);
    const error = useSelector(state => state.contentShow.error);

    const [showList, setShowList] = useState([]);
    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        console.log('saga result of movie')
        console.log(tvshowData)
        setShowList(tvshowData)
        if(tvshowData != null){
            setImgSrc(tvshowData[0]?.poster)

        }
    },[tvshowData])

    const clickhandler=(e) => {
        const idx = parseInt(e.target.name);
        console.log(idx)
        console.log(tvshowData[idx]?.poster)
        
        setImgSrc(tvshowData[idx]?.poster);
    }

    return (
        <>
            {tvshowData === null && !loading && <p>No movie ranking list!</p>}
            {error && !loading && <p>{error}</p>}

            <h1 className="type">TVSHOWS</h1>
            <hr></hr>

            <div className="contentBox">
                <div className="posterBox">
                    <img className="poster" src={imgSrc}></img>
                </div>
                <div className='space'>
                </div>
                <div className="rankBox">
                    {
                        tvshowData?.map((movie, idx) => (
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

export default ShowBox;