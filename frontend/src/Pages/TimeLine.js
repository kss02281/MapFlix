import React, { useState, useEffect } from "react";
import { southKoreaData } from "../data/Corona_data";
import DrawBar from "../Components/DrawBar";
import styled, {css} from 'styled-components'
import { Button } from "react-bootstrap";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { useHistory } from "react-router-dom";

function DrawBarChart(props) {
  const maxItem = southKoreaData.reduce( function (previous, current) { 
    return previous > current ? previous:current;
  });

  useEffect(() => {
    southKoreaData.map((item) => {
      console.log(item.week)
      
    })
    console.log('max Data :',{maxItem})
  },[])

  const clickHandler = (any) => {
      console.log(any.week)
      console.log(any.confirmedCnt)
      alert("클릭했어??");
  };

  return (
      <div>
          <h1>클릭된 나라는? {props.nation}</h1>
          <ChartContainer>
            {
              southKoreaData.map((item) => (
                <>
                  <DrawBar
                    week={item.week}
                    confirmedCnt={item.confirmedCnt}
                    maxHeight={maxItem.confirmedCnt}
                    onClick={clickHandler}
                  />
                </>
              ))
            }
          </ChartContainer>
      </div>
  )
}

const TimeLine = ({ history, location }) => {
  const nation = location.props.nation;

  return (
    <div>
      <DrawBarChart nation={nation} />
      <Button
        onClick={() => {
          history.push("/");
        }}
        style={{clear:'both'}}
      >
        Go To Main Page
      </Button>
    </div>
  );
};

export default TimeLine;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
`