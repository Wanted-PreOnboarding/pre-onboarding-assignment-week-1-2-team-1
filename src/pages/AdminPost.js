import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Color, Roboto } from '../styles/common';
import axios from 'axios';

function AdminPost() {
  const onAdd = () => {
    axios.get('/getfruits')
    .then(() => {
      alert('성공');
    }).error(() => {
      alert('실패');
    })
  }
  return (
    <AdminPostContainer>
      <p>스토어 상품 목록 등록 페이지</p>
      <Link to='/admin/manage' className='admin-manage'> 상품 수정 바로 가기 → </Link>
      <Items>
        <Item>
          <img></img>
          <div></div>
          <p></p>
          <p></p>
          <p></p>
        </Item>
      </Items>
      <button onClick={onAdd}>상품 등록하기</button>
    </AdminPostContainer>
  )
}

export default AdminPost;

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
  & button {
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
// 상품 리스트 컨테이너
const Items = styled.div`
  width: 100%;
`
// 상품 리스트 한 줄
const Item = styled.div`
  width: 100%;
  height: 100px;
  margin: 10px;
`

