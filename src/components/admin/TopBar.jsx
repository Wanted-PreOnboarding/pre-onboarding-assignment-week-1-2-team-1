import React from 'react';
import styled from '@emotion/styled';

import Button from '../common/Button';

import { Color, Roboto } from '../../styles/common';

function TopBar({ isReveal, setIsReveal, getItems, putItems, setRevealEditList }) {
  const releaseHandler = async () => {
    if (!isReveal) {
      setIsReveal(prev => !prev);
    } else {
      await putItems();
      getItems();
      setIsReveal(prev => !prev);
      setRevealEditList([]);
    }
  };

  return (
    <Container>
      <p>스토어 상품 목록 관리</p>
      <Button height="40px" onClick={releaseHandler}>
        {isReveal ? '변경 저장' : '노출 변경'}
      </Button>
    </Container>
  );
}

export default TopBar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    margin: 0;
    ${Roboto(4, 600, Color.GR400)};
  }
`;
