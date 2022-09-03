import React from 'react';
import OrderInfo from '../components/order/OrderInfo';
import styled from '@emotion/styled';
const Order = () => {
  return (
    <OrderPage>
      <OrderInfo />
    </OrderPage>
  );
};

export default Order;

const OrderPage = styled.main`
  width: 1240px;
`;
