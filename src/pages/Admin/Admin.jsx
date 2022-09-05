import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';

import TopBar from '../../components/admin/TopBar';
import ProductList from '../../components/admin/ProductList';
import Pagination from '../../components/admin/Pagination';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import AdminModal from '../../components/admin/AdminModal';

import useProductList from '../../hooks/useProductList';

function Admin() {
  const [isReveal, setIsReveal] = useState(false);
  const [show, setShow] = useState(false);
  const { productList, setIsVisible, getItems, putItems, setRevealEditList } = useProductList();

  const showHandler = () => {
    setShow(prev => !prev);
  };

  return (
    <AdminPage>
      <Modal show={show}>
        <AdminModal showHandler={showHandler} getItems={getItems} />
      </Modal>
      <TopBar
        isReveal={isReveal}
        setIsReveal={setIsReveal}
        getItems={getItems}
        putItems={putItems}
        setRevealEditList={setRevealEditList}
      />
      <ProductList
        isReveal={isReveal}
        productList={productList}
        setIsVisible={setIsVisible}
        getItems={getItems}
        putItems={putItems}
        show={show}
      />
      <Pagination />
      <Button width="100%" onClick={showHandler}>
        +
      </Button>
    </AdminPage>
  );
}

export default Admin;

const AdminPage = styled.main`
  width: 1240px;
  margin: 0 auto;
  padding-bottom: 158px;
`;
