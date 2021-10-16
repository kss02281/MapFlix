import React, { useMemo }  from "react";
import '../css/GenreAnalysis.scss';
import { useLocation, useHistory } from "react-router-dom";
import { GenreTimeLine } from ".";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import queryString from "query-string";
import { getGenreScore } from "../Redux/actions/genreScore";
import GenreBar from "../Components/GenreBar";
import { setDate } from "../Redux/actions/yearWeek";
import {weekDate} from '../data/Week_date';

function GenreAnalysis({history, location}) {
  const query = queryString.parse(location.search);

  const { nation, nationCode } = query;
  const dispatch = useDispatch();
  
  const genreScore = useSelector(
    (state) => state.genreScore.genreScore,
    shallowEqual
  )

  useMemo(()=>{
    dispatch(getGenreScore({
      nationCode: nationCode,
      week: '2021-039',
    }))

    dispatch(
      setDate({
        year: '2021',
        week: '39',
        date: weekDate['2021-039'],
      })
    );
    
    console.log(genreScore)
  },[])

  
  return (
    <div className="NoOverflow" style={{height:"94%"}}>
        <div className="Sunye">
            <GenreTimeLine location={location} history={history}/>
             <GenreBar genreScore={genreScore}/>
        </div>
        <div></div>
    </div>
  );
}

export default GenreAnalysis;
