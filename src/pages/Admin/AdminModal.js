import { useState } from 'react';
import styled from '@emotion/styled';
import { Color, Roboto } from '../../styles/common';

function AdminModal() {
  // 이미지 입력
  const [image, setImage] = useState('');
  const onImageHandler = (e) => {
    setImage(e.currentTarget.value);
  }
  // 상품명 입력
  const [name, setName] = useState('');
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  }
  // 가격 입력
  const [price, setPrice] = useState('');
  const onPriceHandler = (e) => {
    setPrice(e.currentTarget.value);
  }
  // 할인 가격 입력
  const [salePrice, setSalePrice] = useState('');
  const onSalePriceHandler = (e) => {
    setSalePrice(e.currentTarget.value);
  }

  // 상품 등록 버튼
  const onUploadHandler = () => {
    alert('hello world');
  }
  return (
    <Modal>
      <p>상품을 등록해 주세요.</p>
      <form>
        <label>이미지</label>
        <input type='text' value={image} onChange={onImageHandler}/>

        <label>상품명</label>
        <input type='text' value={name} onChange={onNameHandler}/>

        <label>가격</label>
        <input type='number' value={price} onChange={onPriceHandler} />

        <label>할인 가격</label>
        <input type='number' value={salePrice} onChange={onSalePriceHandler}/>

        <label>할인 유무</label>
        <select>
          <option value='true' defaultChecked>OK🙆‍♂️</option>
          <option value='false'>NO🙅‍♂️</option>
        </select>

        <label>배송비</label>
        <select>
          <option value='0' defaultChecked>무료 배송</option>
          <option value='1'>조건부 배송</option>
          <option value='2'>유료 배송</option>
        </select>

        <button type='submit' onClick={onUploadHandler}>등록하기</button>
      </form>
    </Modal>
  )
}

export default AdminModal;

const Modal = styled.div`
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
  & label {
    margin-top: 10px;
    text-align: left;
  }
  & input, select {
    width: 100%;
    height: 30px;
    border: 1px solid ${Color.GR300};
    outline: none;
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
  
`