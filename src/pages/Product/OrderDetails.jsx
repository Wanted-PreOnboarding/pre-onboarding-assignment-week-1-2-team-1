import React, { useState } from 'react';
import styled from '@emotion/styled';
import OrderInput from '../../components/order/OrderInput';
import OrderDetailsInfo from '../../components/orderDetails/OrderDetailsInfo';
import { Color, Roboto } from '../../styles/common';
import FinalPaymentSummary from '../../components/orderDetails/FinalPaymentSummary';
import { orderNum } from '../../utils/OrderNums';
import { useMemo } from 'react';
import { useLocation } from 'react-router';

const OrderDetails = () => {
  const { state } = useLocation();
  const {
    fruit,
    volume,
    name,
    phoneNumber,
    email,
    recipient,
    recipientPhoneNumber,
    zipCode,
    address,
    detailedAddress,
    isChecked,
  } = state;

  const [toggle, setToggle] = useState(false);
  const { orderTime, orderNumber } = useMemo(() => orderNum(), []);

  return (
    <OrderPage>
      <PageTitleText>주문 상세 내역</PageTitleText>
      {name ? (
        <>
          <OrderDetailsInfo fruit={fruit} volume={volume} />
          <ShowDetails>
            <OrderNum>
              <b>주문번호: </b>
              {orderNumber}
              <b>주문일자: </b>
              {orderTime}
            </OrderNum>
            <button onClick={() => setToggle(prev => !prev)}>
              {toggle ? '접기' : '자세히보기'}
            </button>
          </ShowDetails>
          {toggle && (
            <>
              <hr />
              <BuyerInfoContainer>
                <article className="userInfo">
                  <h1>주문자 정보</h1>
                  <InpuForm>
                    <OrderInput name="이름" value={name} disabled={true} />
                    <OrderInput name="연락처" value={phoneNumber} disabled={true} />
                    <OrderInput name="이메일(선택)" value={email} disabled={true} />
                  </InpuForm>
                </article>
                <article className="shipInfo">
                  <h1>배송 정보</h1>
                  <InpuForm>
                    <StyleLabel htmlFor="checkBox">
                      <input
                        type="checkbox"
                        id="checkBox"
                        name="checkBox"
                        checked={isChecked}
                        disabled
                      />
                      <span>주문 정보와 동일</span>
                    </StyleLabel>
                    <Flex>
                      <OrderInput name="수령인" value={recipient} disabled={true} />
                      <OrderInput name="연락처" value={recipientPhoneNumber} disabled={true} />
                    </Flex>
                    <OrderInput name="우편번호" value={zipCode} disabled={true} />
                    <OrderInput name="주소" value={address} disabled={true} isWidthPercent={true} />
                    <OrderInput
                      name="상세주소"
                      value={detailedAddress}
                      disabled={true}
                      isWidthPercent={true}
                    />
                  </InpuForm>
                </article>
              </BuyerInfoContainer>
              <FinalPaymentSummary fruit={fruit} volume={volume} />
              <hr />
            </>
          )}
        </>
      ) : (
        '주문 내역이 없습니다.'
      )}
    </OrderPage>
  );
};

export default OrderDetails;

const OrderPage = styled.main`
  width: 1240px;
  margin: 0 auto;
  padding-bottom: 80vh;
`;

const PageTitleText = styled.h1`
  padding-top: 30px;
`;

const BuyerInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 38px;

  & .userInfo {
    width: calc(50% - 23px);
  }
  & .shipInfo {
    width: 50%;
  }

  & article {
    box-sizing: border-box;
  }
`;
const InpuForm = styled.div`
  height: 368px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  padding: 20px 30px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const StyleLabel = styled.label`
  display: flex;

  & p {
    ${Roboto(1.2, 600, '#000')};
    line-height: 14px;
  }
`;

const ShowDetails = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  & button {
    background-color: #fafafa;
    margin-right: 20px;
    ${Roboto(1.6, 600, Color.GR400)};
    border: 0;
    outline: 0;
    cursor: pointer;
    &:hover {
      color: ${Color.GR300};
    }
  }
`;

const OrderNum = styled.p`
  & b + b {
    margin-left: 20px;
  }
`;
