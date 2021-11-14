import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const GenreDrawBar = React.memo(function GenreDrawBar(props) {
  const fullweek = props.fullweek;
  const countryCode = props.countryCode;
  const [color, setColor] = useState('#ffffff');

  const confirmedCnt = props.confirmedCnt;
  const onClickAction = props.onClick;
  const ratio = props.ratio;
  const history = useHistory();

  useEffect(() => {
    fetch(process.env.REACT_APP_DB_HOST + '/api/netflix/' + countryCode + '/' + fullweek + '/genre')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('no data');
        }
      })
      .then((data) => {
        setColor(data?.color);
      })
      .catch(function (error) {
        console.log(error);
        history.push('./loading');
      });
  }, [fullweek, countryCode]);

  return (
    <div className="BarContainer">
      <Bar confirmedCnt={confirmedCnt} ratio={ratio} onClick={onClickAction} color={color}></Bar>
    </div>
  );
});

export default GenreDrawBar;

const Bar = styled.div`
  width: 12px;
  height: ${(props) => Math.round(props.confirmedCnt / props.ratio) / 2}px;
  margin-top: ${(props) => 200 - Math.round(props.confirmedCnt / props.ratio) / 2}px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border-radius: 60px 60px;
  &:hover {
    opacity: 0.7;
  }
`;
