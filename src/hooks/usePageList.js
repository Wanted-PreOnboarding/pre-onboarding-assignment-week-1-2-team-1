import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const usePageList = () => {
  const [pageList, setPageList] = useState([]);
  const [searchParams] = useSearchParams();
  const curPage = searchParams.get('page');

  const getAllItems = async () => {
    const itemList = await fetch(`/getallfruits`, {
      method: 'GET',
    }).then(res => res.json());

    const maxPage = Math.ceil(itemList.fruits.length / 10);
    const pageNumbers = [];
    for (let i = 0; i < maxPage; i++) {
      pageNumbers.push(i + 1);
    }

    setPageList(() => pageNumbers);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return { pageList, curPage, getAllItems };
};

export default usePageList;
