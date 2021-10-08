import React from "react"
import ReactHover from 'react-hover'
import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, {css} from 'styled-components'


function DrawBar(props) {

    const week = props.week;
    const confirmedCnt = props.confirmedCnt;
    const maxHeight = props.maxHeight;
    const onClickAction = props.onClick;
    const ratio = props.ratio;


    return (
        <>
            <Bar confirmedCnt={confirmedCnt} ratio={ratio} onClick={onClickAction}></Bar>
        </>
    )
}

export default DrawBar;

const Bar = styled.div`

    width: 12px;
    height: ${(props) => Math.round(props.confirmedCnt/props.ratio)}px;
    margin-top: ${(props) => 400-Math.round(props.confirmedCnt/props.ratio)/2}px;
    background-color: pink;
    cursor: pointer;
    border-radius: 60px 60px;
    &:hover {
        background-color: red;
    }
`