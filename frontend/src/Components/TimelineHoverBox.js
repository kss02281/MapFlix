import React, { useEffect, useMemo, useState } from 'react';
import Title from './Title';
import '../css/TimelineHoverBox.scss'

function TimelineHoverBox(props) {

    const fullWeek = props.fullWeek;
    const confirmedCnt = props.confirmedCnt;
    const movie = props.movie;
    const show = props.show;

    const [year, week] = [parseInt(fullWeek.slice(0,4)), parseInt(fullWeek.slice(5,8))];

    return (
        <div className="hoverContainerT">
            <div className='hoverTimeTop'>
                <div>{year}, WEEK {week}</div>
                <div>New Confirmed : {confirmedCnt}</div>
            </div>
            
            <hr/>
            <div className="top1ContentT">
                <div className="movieT">
                    <div className='hoverTimeType'>TOP MOVIE</div>
                    <img className='hoverImg' src={movie?.poster} />
                    <br/>
                    <div className='hoverTimeTitle'>{movie?.title}</div>
                </div>
                <div className="blank"></div>
                <div className="tvshowsT">
                    <div className='hoverTimeType'>TOP TVSHOWS</div>
                    <img className='hoverImg' src={show?.poster} />
                    <br/>
                    <div className='hoverTimeTitle'>{show?.title}</div>
                </div>
            </div>
        </div>
    )
    
}
export default TimelineHoverBox;