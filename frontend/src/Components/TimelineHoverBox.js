import React, { useEffect, useMemo, useState } from 'react';
import { shallowEqual, useSelector } from "react-redux";
import '../css/TimelineHoverBox.scss'

function TimelineHoverBox(props) {

    const nationName = props.nation;
    const nationCode = props.nationCode;
    const fullWeek = props.week;
    const confirmedCnt = props.confirmedCnt;
    const [top1List, setTop1List] = useState([]);


    const contentList = useSelector(
        state => (
            state.topContentList.topContent
        ),
        shallowEqual
    )



    // useMemo(() => {
    //     // if(!(Object.isNull(contentList)))
    //     // {        
    //     //     console.log(Object.toString)
    //     //     // setTimeout(() => {
    //     //     //         setTop1List(Object.keys(contentList.fullWeek || ['null']));
    //     //     //         console.log(top1List)
    //     //     //     },2000)
    //     // }
    //     console.log(Object.toString)
    // },[ fullWeek, confirmedCnt ])

    const [year, week] = [parseInt(fullWeek.slice(0,4)), parseInt(fullWeek.slice(5,8))];


    return (
        <div className="hoverContainerT">
            <div>{year}, WEEK {week}</div>
            <div>New Confirmed : {confirmedCnt}</div>
            <hr></hr>
            <div className="top1ContentT">
                <div className="movieT">
                    MOVIE
                    {/* {contentList[0]} */}
                </div>
                <div className="tvshowsT">
                    TVSHOWS
                </div>
            </div>
        </div>
        
    )
    
}
export default TimelineHoverBox;