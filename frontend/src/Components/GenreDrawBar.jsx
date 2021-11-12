import React, { useState, useEffect } from "react"
import styled from 'styled-components'


function GenreDrawBar(props) {
    const fullweek = props.fullweek;
    // const week = props.week;
    // const year = props.year;
    const countryCode = props.countryCode;
    const [color, setColor] = useState("#ffffff");
    const confirmedCnt = props.confirmedCnt;
    const onClickAction = props.onClick;
    const ratio = props.ratio;

    useEffect(() => {
        fetch(process.env.REACT_APP_DB_HOST + "/api/netflix/" + countryCode + "/" + fullweek + "/genre")
            .then((response) => {
            if (response.ok) {
                console.log( ratio)
                return response.json();
            }
            else {
                throw new Error('no data')
            }
            })
            .then((data) => {
            //console.log(data?.color);
            setColor(data?.color);
            }).catch((error) => {
                console.log(error)
            })
        ;
    }, [countryCode, fullweek]);

    return (
        <div className="BarContainer">
            <Bar confirmedCnt={confirmedCnt} ratio={ratio} onClick={onClickAction} color={color}></Bar>
        </div>
    )
}

export default GenreDrawBar;

const Bar = styled.div`
width: 12px;
height: ${(props) => Math.round(props.confirmedCnt/props.ratio)/2}px;
margin-top : ${(props) => 200 - Math.round(props.confirmedCnt/props.ratio)/2}px;
background-color: ${(props) => props.color};
cursor: pointer;
border-radius: 60px 60px;
&:hover {
    opacity: 0.7;
    }
`