import React, { useState } from 'react';
import styled from '@emotion/styled';
import OrderInput from '../../components/order/OrderInput';
import OrderDetailsInfo from '../../components/orderDetails/OrderDetailsInfo';
import { Color, Roboto } from '../../styles/common';
import FinalPaymentSummary from '../../components/orderDetails/FinalPaymentSummary';

const OrderDetails = ({
  name,
  phoneNumber,
  email,
  recipient,
  recipientPhoneNumber,
  zipCode,
  address,
  detailedAddress,
  isChecked,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <OrderPage>
      <h1 style={{ paddingTop: '30px' }}>주문 상세 내역</h1>
      <OrderDetailsInfo />
      <ShowDetails>
        <button onClick={() => setToggle(prev => !prev)}>{toggle ? '접기' : '자세히보기'}</button>
      </ShowDetails>
      {toggle && (
        <>
          <hr />
          <BuyerInfoContainer>
            <article className="userInfo">
              <h1>주문자 정보</h1>
              <InpuForm>
                <OrderInput name={name} value={name} disabled={true} />
                <OrderInput name={phoneNumber} value={phoneNumber} disabled={true} />
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
          <FinalPaymentSummary />
        </>
      )}
    </OrderPage>
  );
};

// 임의로 넣은 props 기본값입니다.
OrderDetails.defaultProps = {
  name: '김뚝딱',
  phoneNumber: '010-1111-111',
  email: '',
  recipient: '김뚝딱씨',
  recipientPhoneNumber: '010-1111-1112',
  zipCode: '11240',
  address: '서울시',
  detailedAddress: '11동 3호',
  isChecked: true,
};

export default OrderDetails;

const OrderPage = styled.main`
  width: 1240px;
  margin: 0 auto;
  padding-bottom: 158px;
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
  cursor: pointer;
  & button {
    background-color: #fafafa;
    ${Roboto(1.6, 600, '#000')};
    border: 0;
    outline: 0;
    &:hover {
      color: ${Color.GR300};
    }
  }
`;
