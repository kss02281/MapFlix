import React, { useMemo }  from "react";
import '../css/GenreAnalysis.scss';
import { useLocation, useHistory } from "react-router-dom";
import { GenreTimeLine } from ".";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import queryString from "query-string";
import { getGenreScore } from "../Redux/actions/genreScore";

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
    
    console.log(genreScore)
  },[])

  return (
    <div>
        <div className="Sunye">
            <GenreTimeLine location={location} history={history}/>
        </div>
        <div></div>
    </div>
  );
}

export default GenreAnalysis;
