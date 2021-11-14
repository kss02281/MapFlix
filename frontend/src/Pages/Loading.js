// pages/Loading.js
import Spinner from '../Components/Spinner';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const Title = styled.h1`
  font-size: 64px;
  font-weight: bold;
  margin: 8px;
  margin-bottom: 96px;
  text-align: center;
`;

const Loading = () => {
  const history = useHistory();

  const goBack = () => {
    history.push('./nationInfo?nation=South%20Korea&nationCode=kr');
  };
  return (
    <div>
      <button onClick={goBack}>한국으로 돌아가기</button>
      <Title>에러 페이지</Title>
      <Spinner />
    </div>
  );
};

export default Loading;
