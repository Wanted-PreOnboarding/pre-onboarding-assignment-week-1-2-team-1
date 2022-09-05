import React from 'react';
import { Operator, PaymentPrice, Summary } from '../order/PaymentSummary';
import { hasShppingPrice } from '../../utils/hasShippingPrice';

const FinalPaymentSummary = ({ fruit, volume }) => {
  const hasSippingPrice = hasShppingPrice(fruit);

  return (
    <Summary>
      <h1>최종 결제 정보</h1>
      <div className="container">
        <PaymentPrice title="총 상품금액" price={fruit.price * volume}></PaymentPrice>
        <Operator>-</Operator>
        <PaymentPrice
          title="총 할인금액"
          price={(fruit.price - fruit.salePrice) * volume}
        ></PaymentPrice>
        <Operator>+</Operator>
        <PaymentPrice title="배송비" price={hasSippingPrice}></PaymentPrice>
        <Operator>+</Operator>
        <PaymentPrice
          title="총 결제 금액"
          price={fruit.salePrice * volume + hasSippingPrice}
          emphasis="emphasis"
        ></PaymentPrice>
      </div>
    </Summary>
  );
};

export default FinalPaymentSummary;
