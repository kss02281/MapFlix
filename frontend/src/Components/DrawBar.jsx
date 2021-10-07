import React from "react";
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, {css} from 'styled-components'


function DrawBar(props) {
    const week = props.week;
    const confirmedCnt = props.confirmedCnt;
    const maxHeight = props.maxHeight;
    const onClickAction = props.onClick;

    return (
        <>
            <Bar confirmedCnt={confirmedCnt} maxHeight={maxHeight} onClick={onClickAction}>
            </Bar>
            
        </>
    )
}

export default DrawBar;

const Bar = styled.div`
    width: 12px;
    height: ${(props) => props.confirmedCnt/10}px;
    margin-top: ${(props) => props.maxHeight/10 - props.confirmedCnt/20}px;
    background-color: pink;
    cursor: pointer;
    border: 1px solid;


    &:hover {
        background-color: red;
    }
`