import React from 'react';
import styled from '@emotion/styled';
import { Color, Roboto } from '../styles/common';

function AdminModal() {
  return (
    <Modal>
      <p>상품을 등록해 주세요.</p>
      <form>
        
      </form>
    </Modal>
  )
}

export default AdminModal;

const Modal = styled.div`
  width: 800px;
  height: 400px;
  margin: 0 auto;
  background-color: ${Color.GR100};
  border-radius: 20px;
  box-shadow: 1px 1px 10px 1px #ccc;
  & p {
    ${Roboto(1.8, 700, Color.GR300)};
    text-align: center;
  }
`