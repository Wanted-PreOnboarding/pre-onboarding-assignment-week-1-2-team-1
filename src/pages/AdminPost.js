// import { useState } from 'react';
import styled from 'styled-components';

const AdminPostBlock = styled.div`
  width: 1260px;
  margin: 0 auto;
`
const Title = styled.p`
  font-size: 24px;
  text-align: left;
`
const AddButton = styled.button`
  width: 620px;
  height: 56px;
  border: none;
  outline: none;
  background-color: #4A9536;
  cursor: pointer;
`
function AdminPost() {
  return (
    <AdminPostBlock>
      <Title>스토어 상품 목록 등록 페이지</Title>
      <AddButton>+</AddButton>
    </AdminPostBlock>
  )
}

export default AdminPost