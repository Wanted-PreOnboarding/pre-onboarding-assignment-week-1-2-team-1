import axios from 'axios';

const useProductItem = () => {
  const deleteProduct = async id => {
    await axios.delete('/fruit', { params: { id } });
  };

  return { deleteProduct };
};

export default useProductItem;
