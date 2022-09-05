import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

import Backdrop from './Backdrop';

function Modal({ show, children }) {
  const contents = (
    <React.Fragment>
      {show && <Backdrop />}
      {show && <ModalContainer>{children}</ModalContainer>}
    </React.Fragment>
  );

  return ReactDOM.createPortal(contents, document.getElementById('modal'));
}

export default Modal;

const ModalContainer = styled.div`
  z-index: 100;
  position: fixed;
  top: 22vh;
  left: 10%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
