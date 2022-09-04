import React, { useEffect, useState } from 'react';
import OrderInfo from '../../components/order/OrderInfo';
import styled from '@emotion/styled';
import OrderInput from '../../components/order/OrderInput';
import PaymentSummary from '../../components/order/PaymentSummary';
import priceSetting from '../../utils/priceSetting';
import { Color, Roboto } from '../../styles/common';
import { useLocation, useNavigate } from 'react-router';
const Order = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [recipient, setRecipient] = useState('');
  const [recipientPhoneNumber, setRecipientPhoneNumber] = useState('');
  const [zipCode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [detailedAddress, setDetailedAddress] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { fruit, volume, id } = location.state;

  const hasSippingPrice = () => {
    const fruitData = { ...fruit };
    if (fruitData.shippingFlag === 2) {
      return fruitData.shippingPrice;
    } else {
      return 0;
    }
  };

  const totalPayment = () => {
    const fruitData = { ...fruit };
    return fruitData.price * 2 - fruitData.salePrice - hasSippingPrice();
  };

  const isDisabled =
    name &&
    phoneNumber &&
    recipient &&
    recipientPhoneNumber &&
    zipCode &&
    address &&
    detailedAddress;

  useEffect(() => {
    if (isChecked) {
      document.getElementById('수령인').value = name;
      setRecipient(name);

      document.getElementById('수령인 연락처').value = phoneNumber;
      setRecipientPhoneNumber(phoneNumber);
    } else {
      document.getElementById('수령인').value = '';
      setRecipient('');
      document.getElementById('수령인 연락처').value = '';
      setRecipientPhoneNumber('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  const paymentHandler = () => {
    alert(`결제가 완료되었습니다.\n 이름 : ${name} \n
    이름 : ${name} \n
    연락처 : ${phoneNumber} \n
    이메일 : ${email} \n
    수령인 : ${recipient} \n
    수령인 연락처 : ${recipientPhoneNumber} \n
    우편번호 : ${zipCode} \n
    주소 : ${address} \n
    상세주소 : ${detailedAddress} \n
    `);

    navigate(`/fruit/${id}/payment/detail`, {
      state: { fruit, volume, id },
    });
  };

  return (
    <OrderPage>
      <OrderInfo info={fruit} volume={volume} />
      <BuyerInfoContainer>
        <article className="userInfo">
          <h1>주문자 정보</h1>
          <InpuForm>
            <OrderInput placeHolder="이름" name="이름" setValue={setName} />
            <OrderInput placeHolder="010-xxxx-xxxx" name="연락처" setValue={setPhoneNumber} />
            <OrderInput placeHolder="xxxx@email.com" name="이메일(선택)" setValue={setEmail} />
          </InpuForm>
        </article>

        <article className="shipInfo">
          <h1>배송 정보</h1>
          <InpuForm>
            <StyleLabel htmlFor="checkBox">
              <input
                type="checkbox"
                value={isChecked}
                onChange={() => setIsChecked(prev => !prev)}
                id="checkBox"
                name="checkBox"
              />
              <span>주문 정보와 동일</span>
            </StyleLabel>
            <Flex>
              <OrderInput placeHolder="이름" name="수령인" setValue={setRecipient} />
              <OrderInput
                placeHolder="010-xxxx-xxxx"
                name="수령인 연락처"
                setValue={setRecipientPhoneNumber}
              />
            </Flex>
            <OrderInput placeHolder="우편번호" name="우편번호" setValue={setZipcode} />
            <OrderInput
              placeHolder="주소"
              name="주소"
              setValue={setAddress}
              isWidthPercent={true}
            />
            <OrderInput
              placeHolder="상세주소"
              name="상세주소"
              setValue={setDetailedAddress}
              isWidthPercent={true}
            />
          </InpuForm>
        </article>
      </BuyerInfoContainer>
      <PaymentSummary info={fruit} />
      <Button disabled={!isDisabled} onClick={paymentHandler}>
        총 {priceSetting(totalPayment())}원 결제하기
      </Button>
    </OrderPage>
  );
};

export default Order;

const OrderPage = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  padding-bottom: 158px;
  @media (max-width: 765px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & section {
      width: 80% !important;

      align-items: center;

      & article {
        width: 100% !important;
      }
    }
    & button {
      width: 80%;
      height: 88px;
      ${Roboto(2.4, 600, '#fff')};
    }
  }
`;

const BuyerInfoContainer = styled.section`
  display: flex;
  @media (max-width: 765px) {
    flex-direction: column;
    align-items: center;
  }
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

const Button = styled.button`
  width: 100%;
  height: 144px;
  ${Roboto(3.8, 600, '#fff')};
  line-height: 44px;
  background-color: ${Color.GR300};
  outline: none;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
  }
`;

const StyleLabel = styled.label`
  display: flex;

  & p {
    ${Roboto(1.2, 600, '#000')};
    line-height: 14px;
  }
`;
