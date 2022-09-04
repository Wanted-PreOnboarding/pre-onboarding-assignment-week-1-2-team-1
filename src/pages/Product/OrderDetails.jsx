import React from 'react';
import OrderInfo from '../../components/order/OrderInfo';
import OrderInput from '../../components/order/OrderInput';
import PaymentSummary from '../../components/order/PaymentSummary';

const OrderDetails = () => {
  return (
    <>
      <OrderInfo />
      <div>
        <article>
          <h2>주문자 정보</h2>
          <div style={{ backgroundColor: 'tomato' }}>
            <OrderInput />
            <OrderInput />
            <OrderInput />
          </div>
        </article>
        <article>
          <h2>배송 정보</h2>
          <div style={{ backgroundColor: 'yellowgreen' }}>
            <input type="checkbox"></input>
            <OrderInput />
            <OrderInput />
            <OrderInput />
            <OrderInput />
          </div>
        </article>
        <PaymentSummary />
      </div>
    </>
  );
};

export default OrderDetails;
