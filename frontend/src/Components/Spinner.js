import ScaleLoader from 'react-spinners/ScaleLoader';
import styled from 'styled-components';
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Spinner() {
  return (
    <Flex>
      <ScaleLoader height="160" width="32" color="#6b5ce7" radius="8" />
    </Flex>
  );
}

export default Spinner;
