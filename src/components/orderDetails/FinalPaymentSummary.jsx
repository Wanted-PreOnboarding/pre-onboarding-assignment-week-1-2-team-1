import React from 'react';
import { Operator, PaymentPrice, Summary } from '../order/PaymentSummary';

const FinalPaymentSummary = () => {
  return (
    <Summary>
      <h1>최종 결제 정보</h1>
      <div className="container">
        <PaymentPrice title="총 상품금액" price={30000}></PaymentPrice>
        <Operator>+</Operator>
        <PaymentPrice title="총 할인금액" price={30000}></PaymentPrice>
        <Operator>-</Operator>
        <PaymentPrice title="배송비" price={30000}></PaymentPrice>
        <Operator>+</Operator>
        <PaymentPrice title="총 결제 금액" price={30000} emphasis="emphasis"></PaymentPrice>
      </div>
    </Summary>
  );
};

export default FinalPaymentSummary;
