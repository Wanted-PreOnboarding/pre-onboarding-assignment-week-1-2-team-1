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

function PaymentSummary({ info }) {
  const hasSippingPrice = () => {
    const fruitData = { ...info };
    if (fruitData.shippingFlag === 2) {
      return fruitData.shippingPrice;
    } else {
      return 0;
    }
  };

  const totalPayment = () => {
    const fruitData = { ...info };
    return fruitData.price * 2 - fruitData.salePrice - hasSippingPrice();
  };

  return (
    <Summary>
      <h1>결제요약</h1>
      <div className="container">
        <PaymentPrice title="총 상품금액" price={info.price} />
        <Operator>-</Operator>
        <PaymentPrice title="총 할인금액" price={info.price - info.salePrice} />
        <Operator>+</Operator>
        <PaymentPrice title="배송비" price={hasSippingPrice()} />
        <Operator>=</Operator>
        <PaymentPrice title="총 결제 예정금액" price={totalPayment()} />
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
  @media (max-width: 1240px) {
    width: 100% !important;
    margin: auto;
    margin-bottom: 57px;

    & .container {
      position: relative;
      flex-direction: column;
      align-items: flex-end;
    }
  }
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
