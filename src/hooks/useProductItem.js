/* eslint-disable */
import axios from 'axios';
import usePageList from './usePageList';
import useProductList from './useProductList';

const useProductItem = () => {
  const { getItems } = useProductList();
  const { getAllItems } = usePageList();

  const deleteProduct = async id => {
    await axios.delete('/fruit', { params: { id } });

    await getItems();
    await getAllItems();
  };

  return { deleteProduct };
};

export default useProductItem;
