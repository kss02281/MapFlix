import React, { useEffect, useMemo, useState } from 'react';
import { shallowEqual, useSelector } from "react-redux";
import '../css/TimelineHoverBox.scss'

function TimelineHoverBox(props) {

    const nationName = props.nation;
    const nationCode = props.nationCode;
    const fullWeek = props.fullWeek;
    const confirmedCnt = props.confirmedCnt;
    const topList = props.content;
    const [top1List, setTop1List] = useState('');


    const contentList = useSelector(
        state => (
            state.topContentList.topContent[fullWeek]
        ),
        shallowEqual
    )

    
    const [year, week] = [parseInt(fullWeek.slice(0,4)), parseInt(fullWeek.slice(5,8))];



    useEffect(() => {
        if (year === 2020 && week < 33) {
            
        }else if (year === 2021 && week === 1 && nationCode != 'kr'){
            
        }else {
            if(topList)
            { 
                console.log('topList', topList?.index(0))
                setTop1List(top1List[0]?.title)
            }
        }
    },[ fullWeek, confirmedCnt ])

    return (
        <div className="hoverContainerT">
            <div>{year}, WEEK {week}</div>
            <div>New Confirmed : {confirmedCnt}</div>
            <hr></hr>
            <div className="top1ContentT">
                <div className="movieT">
                    MOVIE {top1List}
                    
                </div>
                <div className="tvshowsT">
                    TVSHOWS
                    {top1List}
                </div>
            </div>
        </div>
        
    )
    
}
export default TimelineHoverBox;