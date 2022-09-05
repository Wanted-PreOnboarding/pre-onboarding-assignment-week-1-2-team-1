import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

function Backdrop() {
  return ReactDOM.createPortal(<Container />, document.getElementById('backdrop'));
}

export default Backdrop;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
`;
