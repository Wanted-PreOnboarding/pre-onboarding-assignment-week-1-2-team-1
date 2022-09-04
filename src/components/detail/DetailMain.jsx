import React from 'react';

import { Roboto, Color } from '../../styles/common';

import styled from '@emotion/styled';

function DetailMain() {
  return (
    <Container>
      <ViewMenu>
        <ViewMenuButton href="#1">상품상세정보</ViewMenuButton>
        <ViewMenuButton href="#2">고객리뷰(0)</ViewMenuButton>
        <ViewMenuButton href="#3">Q&A(0)</ViewMenuButton>
      </ViewMenu>
      <DetailImg id="1" src="/imgs/제품상세정보.png" />
      <ReviewOrQna id="2">
        <div>고객리뷰(0)</div>
        <div>등록된 고객 리뷰가 없습니다.</div>
      </ReviewOrQna>
      <ReviewOrQna id="3">
        <div>Q&A(0)</div>
        <div>등록된 문의사항이 없습니다.</div>
      </ReviewOrQna>
    </Container>
  );
}

export default DetailMain;

const Container = styled.section`
  @media screen and (max-width: 1240px) {
    width: 36.063rem;
  }
`;

const ViewMenu = styled.div`
  display: flex;
  margin-top: 150px;
  @media screen and (max-width: 1240px) {
    margin-left: 21px;
  }
`;

const ViewMenuButton = styled.a`
  background-color: ${Color.GR100};
  width: 413.33px;
  height: 77px;
  text-align: center;
  border: 1px solid ${Color.GR200};
  ${Roboto(2, 600, 'dark')}
  line-height: 77px;

  &:hover {
    background-color: ${Color.GR200};
    cursor: pointer;
  }

  text-decoration: none;
  color: black;
`;

const DetailImg = styled.img`
  width: 850px;
  height: 1100px;
  margin: 384px 200px;

  @media screen and (max-width: 1240px) {
    width: 36.063rem;
    margin: 30px 21px;
  }
`;

const ReviewOrQna = styled.div`
  div:first-of-type {
    height: 37px;
    ${Roboto(1.8, 600, Color.GR400)}
    line-height: 21px;
    border-bottom: 1px solid ${Color.GY100};
  }

  div:last-of-type {
    height: 250px;
    text-align: center;
    ${Roboto(2.4, 600, Color.GY100)}
    line-height: 250px;
  }
`;
