import React from 'react';
import styled from '@emotion/styled';

function AdminItemList() {
  return (
    <Items>
      <Item>
      </Item>
    </Items>
  )
}

export default AdminItemList;

// 상품 리스트 컨테이너
const Items = styled.div`
  width: 1260px;
`
// 상품 리스트 한 줄
const Item = styled.div`
  width: 1260px;
  height: 100px;
  margin: 10px;
`