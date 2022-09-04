/* eslint-disable */

import { useState, useEffect, useCallback } from 'react';
import usePageList from './usePageList';

const useProductList = () => {
  const [productList, setProductList] = useState();
  const { curPage } = usePageList();

  const getItems = useCallback(async () => {
    const itemList = await fetch(`/getfruits?page=${curPage}`, {
      method: 'GET',
    }).then(res => res.json());

    setProductList(() => [...itemList.returnPageData]);

    console.log(productList);
  }, [curPage]);

  const setIsVisible = (id, isReveal) => {
    if (!isReveal) {
      return;
    }

    setProductList(prevProductList => {
      let editedProductList = prevProductList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isVisible: !item.isVisible,
          };
        }
        return {
          ...item,
        };
      });

      return [...editedProductList];
    });
  };

  useEffect(() => {
    getItems();
  }, [curPage, getItems]);

  return { productList, setIsVisible, getItems };
};

export default useProductList;
