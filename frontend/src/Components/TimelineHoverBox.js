import react, { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from "react-redux";
import '../css/TimelineHoverBox.scss'

function TimelineHoverBox(props) {

    const nationName = props.nation;
    const fullWeek = props.week;
    const confirmedCnt = props.confirmedCnt;
    const [contentList, setContentList] = useState([]);


    // useEffect(() => {
    //     console.log("top Content")
    //     console.log(topContent)
    //     if(topContent){
    //         setContentList(topContent);
    //     }
    // },[ fullWeek ])

    const [year, week] = [parseInt(fullWeek.slice(0,4)), parseInt(fullWeek.slice(5,8))];


    return (
        <div className="hoverContainer">
            <div>{year}, WEEK {week}</div>
            <div>New Confirmed : {confirmedCnt}</div>
            <hr></hr>
            <div className="top1Content">
                <div className="movie">
                    MOVIE
                    {contentList[0]}
                </div>
                <div className="tvshows">
                    TVSHOWS
                </div>
            </div>
        </div>
        
    )
    
}
export default TimelineHoverBox;