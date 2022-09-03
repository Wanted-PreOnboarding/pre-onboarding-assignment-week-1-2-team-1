function ProductCard({ id, image, isSale, name, price, salePrice }) {
  return (
    <div>
      <div>
        {/* 이후에 absolute로 sale, best,md를 추가하기 위해서 div로 감쌌음*/}
        <img src={image} alt="" />
      </div>
      <div className="card-description">
        <div>
          <h3>{name}</h3>
          <span>{price}</span>
          <span>{salePrice}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
