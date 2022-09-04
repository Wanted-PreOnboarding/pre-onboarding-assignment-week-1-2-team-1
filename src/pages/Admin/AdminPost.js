import { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Color, Roboto } from '../../styles/common';
// import axios from 'axios';
import Modal from './AdminModal';
import AdminItemList from './AdminItemList';

function AdminPost() {
  // eslint-disable-next-line no-unused-vars
  // 등록 모달
  const [modal, setModal] = useState(false);
  const onModal = () => {
    setModal(!modal);
  }
  return (
    <AdminPostContainer>
      <p>스토어 상품 목록 등록 페이지</p>
      <Link to='/admin/manage'> 상품 수정 바로 가기 → </Link>

      { modal === true ? <Modal /> : null}

      <AdminItemList />

      <button onClick={onModal} className='modal-btn'>상품 등록하기</button>
    </AdminPostContainer>
  )
}

export default AdminPost;

// style
// 관리자 상품 등록 페이지 컨테이너
const AdminPostContainer = styled.div`
  width: 1260px;
  margin: 0 auto;
  & p {
    ${Roboto(1.8, 700, Color.GR300)};
  }
  & a {
    display: block;
    ${Roboto(1.4, 600, Color.GR300)};
    text-align: right;
    text-decoration: none;
  }
  & button.modal-btn {
    display: block;
    width: 600px;
    height: 60px;
    margin: 30px auto;
    border: none;
    outline: none;
    ${Roboto(1.8, 600, Color.GR100)};
    background-color: ${Color.GR300};
    cursor: pointer;
  }
`


