import React from 'react';
import styled from '@emotion/styled';
import { Color, Roboto } from '../styles/common';
import priceSetting from '../../utils/priceSetting';

const OrderInfo = () => {
  return (
    <OrderInfoContainer>
      <ul>
        <li>상품이미지</li>
        <li>상품정보</li>
        <li>배송비</li>
        <li>수량</li>
        <li>결제 예정 금액(상품금액 + 배송비)</li>
      </ul>
      <MyOrderHistoryContainer>
        <img
          src="https://cdn.imweb.me/thumbnail/20220610/57a69b42b7edf.jpg"
          alt="내가 구입할 상품"
        />
        <ProductName className="product-name">
          <h1>목감기에 좋은 건더기 없는 프리미엄 수제 착즙 유자청</h1>
          <p>
            <Chip>필수 선택</Chip> <span>유자청 480g(960g)/2개</span>
          </p>
        </ProductName>
        <span>3500원</span>
        <span>2개</span>
        <Price>
          <h1>{priceSetting(30100)}원</h1>
          <span>
            {priceSetting(26600)}원 + {priceSetting(3500)}원
          </span>
        </Price>
      </MyOrderHistoryContainer>
    </OrderInfoContainer>
  );
};

export default OrderInfo;

const OrderInfoContainer = styled.div`
  margin-bottom: 57px;
  & ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 26px 53px;

    & li {
      ${Roboto(1.6, 600, Color.GR400)};
      line-height: 19px;
    }
  }
`;

const ProductName = styled.div`
  & h1 {
    ${Roboto(1.6, 600, '#000')};
  }

  & p {
    margin: 0;
  }
  & span {
    ${Roboto(1, 600, Color.GY200)};
    line-height: 12px;
  }
`;

const MyOrderHistoryContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & img {
    width: 180px;
    height: 180px;
  }
`;

const Chip = styled.div`
  background-color: ${Color.GR400};
  ${Roboto(1, 600, '#fff')};
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 5px;
`;

const Price = styled.div`
  & h1 {
    ${Roboto(2.8, 600, Color.RD100)};
    line-height: 33px;
  }

  & span {
    ${Roboto(1.6, 600, Color.GY200)};
    line-height: 19px;
  }
`;
