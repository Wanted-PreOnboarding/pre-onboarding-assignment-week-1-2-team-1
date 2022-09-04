import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';

import TopBar from '../../components/admin/TopBar';
import ProductList from '../../components/admin/ProductList';
import Pagination from '../../components/admin/Pagination';
// import { useState } from 'react';
// import { Color } from '../../styles/common';
import Button from '../../components/common/Button';

function Admin() {
  const [isReveal, setIsReveal] = useState(false);

  // 수정 modal 출력용
  // const [isEditMode, setIsEditMode] = useState(false);

  return (
    <AdminPage>
      <TopBar isReveal={isReveal} onClick={() => setIsReveal(prev => !prev)} />
      <ProductList isReveal={isReveal} />
      <Pagination />
      <Button width="100%">+</Button>
    </AdminPage>
  );
}

export default Admin;

const AdminPage = styled.main`
  width: 1240px;
  margin: 0 auto;
  padding-bottom: 158px;
`;
