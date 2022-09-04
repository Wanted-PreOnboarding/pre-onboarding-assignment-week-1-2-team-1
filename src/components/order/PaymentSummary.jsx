import React from 'react';
import { Color, Roboto } from '../../styles/common';
import styled from '@emotion/styled';
// import { css } from '@emotion/react';
import priceSetting from '../../utils/priceSetting';

export const PaymentPrice = ({ title, price, emphasis }) => {
  return (
    <PriceChip>
      <span className="title">{title}</span>
      <span className={`price ${emphasis}`}>{priceSetting(price)}원</span>
    </PriceChip>
  );
};

function PaymentSummary() {
  return (
    <Summary>
      <h1>결제요약</h1>
      <div className="container">
        <PaymentPrice title="총 상품금액" price={30000} />
        <Operator>+</Operator>
        <PaymentPrice title="총 할인금액" price={3400} />
        <Operator>-</Operator>
        <PaymentPrice title="배송비" price={3500} />
        <Operator>=</Operator>
        <PaymentPrice title="총 결제 예정금액" price={30100} />
      </div>
    </Summary>
  );
}

export default React.memo(PaymentSummary);

const PriceChip = styled.div`
  & span:first-of-type {
    margin-right: 26px;
  }
  & .title {
    ${Roboto(2, 600, Color.GR300)};
    line-height: 23px;
  }

  & .price {
    ${Roboto(2, 600, '#000')};
  }

  & .price.emphasis {
    ${Roboto(2, 800, Color.RD100)};
  }
`;

export const Summary = styled.section`
  width: 100%;
  margin-bottom: 57px;
  & h1 {
    ${Roboto(2, 600, '#000')};
  }

  & .container {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 35px 70px;
  }
`;
export const Operator = styled.span`
  display: inline;
  ${Roboto(2, 600, '#000')};
  line-height: 23px;
  display: flex;
  align-items: center;
`;
