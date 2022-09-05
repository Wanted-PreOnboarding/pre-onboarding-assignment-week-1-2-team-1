import { useState } from 'react';
import styled from '@emotion/styled';
import { Color, Roboto } from '../../styles/common';
import axios from 'axios';

function AdminModal({ showHandler, getItems }) {
  /* eslint-disable */
  // 이미지 입력
  const [image, setImage] = useState('');
  const onImageHandler = e => {
    setImage(e.currentTarget.value);
  };
  // 상품명 입력
  const [name, setName] = useState('');
  const onNameHandler = e => {
    setName(e.currentTarget.value);
  };
  // 가격 입력
  const [price, setPrice] = useState('');
  const onPriceHandler = e => {
    setPrice(e.currentTarget.value);
  };
  // 할인 가격 입력
  const [salePrice, setSalePrice] = useState('');
  const onSalePriceHandler = e => {
    setSalePrice(e.currentTarget.value);
  };
  // 할인 여부 입력
  const [isSale, setIsSale] = useState('true');
  const onIsSaleHandler = e => {
    setIsSale(e.currentTarget.value);
  };
  // 배송비 여부 입력
  const [shipping, setShipping] = useState('0');
  const onShippingHandler = e => {
    setShipping(e.currentTarget.value);
  };
  // 판매 여부 입력
  const [saleFlag, setSaleFlag] = useState('0');
  const onSaleFlagHandler = e => {
    setSaleFlag(e.currentTarget.value);
  };
  // 상품 칩 체크
  const [chip, setChip] = useState([]);
  const onChipHandler = (checked, value) => {
    if (checked) {
      setChip([...chip, value]);
    } else {
      setChip(chip.filter(el => el !== value));
    }
  };
  // 상품 등록 버튼
  const onUploadHandler = e => {
    e.preventDefault();
    axios
      .post('/fruit', {
        img: image,
        name: name,
        price: price,
        salePrice: salePrice,
        isSale: isSale,
        shippingFlag: shipping,
        chip: chip,
      })
      .then(res => {
        alert('등록이 완료되었습니다.');
        showHandler();
        getItems();
      })
      .catch(error => {
        alert(error);
      });
  };
  // 상품 모달 창 닫기
  const modalCloseHandler = () => {
    showHandler(prev => !prev);
  };
  return (
    <AdminModalContainer>
      <p>상품을 등록해 주세요.</p>
      <form>
        {/* 이미지 */}
        <label>이미지</label>
        <input type="text" value={image} onChange={onImageHandler} />

        {/* 상품명 */}
        <label>상품명</label>
        <input type="text" value={name} onChange={onNameHandler} />

        {/* 가격 */}
        <label>가격</label>
        <input type="number" value={price} onChange={onPriceHandler} />

        {/* 할인 가격 */}
        <label>할인 가격</label>
        <input type="number" value={salePrice} onChange={onSalePriceHandler} />

        {/* 할인 여부(할인 OK/NO) */}
        <label>할인 여부</label>
        <select onChange={onIsSaleHandler} key={isSale} defaultValue={isSale}>
          <option value="true">할인 상품입니다.</option>
          <option value="false">할인 상품이 아닙니다.</option>
        </select>

        {/* 배송비 여부(무료 배송/조건부 배송/유료 배송) */}
        <label>배송비 여부</label>
        <select onChange={onShippingHandler} key={shipping} defaultValue={shipping}>
          <option value="0">무료 배송</option>
          <option value="1">조건부 배송</option>
          <option value="2">유료 배송</option>
        </select>

        {/* 판매 여부(판매 중/판매 기간 아님/매진) */}
        <label>판매 여부</label>
        <select onChange={onSaleFlagHandler} key={shipping} defaultValue={shipping}>
          <option value="0">판매 중</option>
          <option value="1">판매 기간 아님</option>
          <option value="2">매진</option>
        </select>

        {/* 판매 상품 칩 */}
        <form className="fruit-chips">
          <form className="fruit-chip">
            <label className="fruit-chip-label">BEST 상품</label>
            <input
              type="checkbox"
              value="BEST"
              onChange={e => {
                onChipHandler(e.currentTarget.checked, 'BEST');
              }}
              className="fruit-chip-checkbox"
            />
          </form>
          <form className="fruit-chip">
            <label className="fruit-chip-label">SALE 상품</label>
            <input
              type="checkbox"
              value="SALE"
              onChange={e => {
                onChipHandler(e.currentTarget.checked, 'SALE');
              }}
              className="fruit-chip-checkbox"
            />
          </form>
          <form className="fruit-chip">
            <label className="fruit-chip-label">MD 상품</label>
            <input
              type="checkbox"
              value="MD"
              onChange={e => {
                onChipHandler(e.currentTarget.checked, 'MD');
              }}
              className="fruit-chip-checkbox"
            />
          </form>
        </form>
        <form className='modal-button-form'>
          <button type="submit" onClick={onUploadHandler}>
            등록하기
          </button>
          <button onClick={modalCloseHandler}> 닫기 </button>
        </form>
      </form>
    </AdminModalContainer>
  );
}

export default AdminModal;

const AdminModalContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 50px 0;
  background-color: ${Color.GR100};
  box-shadow: 1px 1px 10px 1px #ccc;
  & p {
    ${Roboto(1.8, 700, Color.GR300)};
    text-align: center;
  }
  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
  }
  & form.fruit-chips {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  & form.fruit-chip {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: right;
  }
  & form.modal-button-form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }
  & label {
    margin-top: 10px;
    text-align: left;
  }
  & input,
  select {
    width: 100%;
    height: 30px;
    border: 1px solid ${Color.GR300};
    outline: none;
  }
  & input.fruit-chip-checkbox {
    width: 30px;
  }
  & button {
    width: 200px;
    height: 40px;
    margin: 20px auto;
    border: none;
    outline: none;
    ${Roboto(1.4, 600, Color.GR100)};
    background-color: ${Color.GR300};
    cursor: pointer;
  }
`;
