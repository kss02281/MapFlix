// pages/Loading.js
import Spinner from '../Components/Spinner';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import Button from '@mui/material/Button';

const Title = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: bold;
  margin: 8px;
  margin-top: 50px;
  margin-bottom: 96px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 70px auto;
`;

const Loading = () => {
  const history = useHistory();

  const goBack = () => {
    history.push('./nationInfo?nation=World&nationCode=world');
  };
  return (
    <Container>
      <Title>Error Page</Title>
      <Spinner />
      <Button style={{ marginTop: '70px' }} onClick={goBack} variant="outlined" color="error">
        Error: Go To World Timeline
      </Button>
      {/* <button onClick={goBack}>한국으로 돌아가기</button> */}
    </Container>
  );
};

export default Loading;
