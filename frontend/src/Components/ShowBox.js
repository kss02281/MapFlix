import React, { useEffect } from 'react';
import '../css/ContentBox.scss';

function ShowBox () {

    return (
        <>
            <h1 className="type">TVSHOW</h1>
            <hr></hr><br></br>
            <div className="contentBox">
                <div className="posterBox">
                    <img className="poster" src="https://m.media-amazon.com/images/M/MV5BODAzMDM0ZjUtZDdiNC00ZWNiLWE1NzMtOTJkZmQ0ZDdjN2ZmXkEyXkFqcGdeQXVyMTI0NTI1MDEw._V1_.jpg"></img>
                </div>
                <div className="space"></div>
                <div className="rankBox">
                    <li>dfsdf</li>
                    <li>sdfdsf</li>
                </div>
            </div>
        </>
    )
}

export default ShowBox;