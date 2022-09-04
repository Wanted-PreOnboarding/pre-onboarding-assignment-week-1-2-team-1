import React from 'react';
import { Operator, PaymentPrice, Summary } from '../order/PaymentSummary';

const FinalPaymentSummary = () => {
  return (
    <Summary>
      <h1>최종 결제 정보</h1>
      <PaymentPrice title="총 상품금액" price={30000}></PaymentPrice>
      <Operator>+</Operator>
    </Summary>
  );
};

export default FinalPaymentSummary;
