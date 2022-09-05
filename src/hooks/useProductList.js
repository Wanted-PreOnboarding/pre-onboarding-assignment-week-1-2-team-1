import { useState, useEffect, useCallback } from 'react';
import usePageList from './usePageList';

const useProductList = () => {
  const [productList, setProductList] = useState();
  const [revealEditList, setRevealEditList] = useState([]);
  const { curPage } = usePageList();

  const getItems = useCallback(async () => {
    const itemList = await fetch(`/getfruits?page=${curPage}`, {
      method: 'GET',
    }).then(res => res.json());

    setProductList([...itemList.returnPageData]);
  }, [curPage]);

  const putItems = async () => {
    await fetch('/allfruit', {
      method: 'PUT',
      body: JSON.stringify(revealEditList),
    });
  };

  const setIsVisible = (id, isReveal) => {
    if (!isReveal) {
      return;
    }

    setProductList(prevProductList => {
      let editedProductList = prevProductList.map(item => {
        if (item.id === id) {
          const flag = (item.saleFlag + 1) % 3;
          setRevealEditList(prev => [...prev, { id: item.id, saleFlag: flag }]);
          return {
            ...item,
            saleFlag: flag,
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

  return { productList, setIsVisible, getItems, putItems, setRevealEditList };
};

export default useProductList;
