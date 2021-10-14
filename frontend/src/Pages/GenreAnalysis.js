import React  from "react";
import '../css/GenreAnalysis.scss';
import { useLocation, useHistory } from "react-router-dom";
import { GenreTimeLine } from ".";

function GenreAnalysis() {
    const location = useLocation();
    const history = useHistory();
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
