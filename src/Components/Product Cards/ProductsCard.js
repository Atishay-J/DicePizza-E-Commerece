import "./ProductCard.css";

const ProductCard = ({ image, title, description, price, type, ratings }) => {
  return (
    <>
      <div className="productCard-container">
        <img src={image} alt="Pizza" className="product-image" />
        <div className="productInfo-container">
          <h2 className="productTitle">{title}</h2>
          <p className="productDesc">{description}</p>
          <div className="productAction-container">
            <div className="productPrice-mark-container">
              <div className="productMark">{type ? "Veg" : "Non-veg"}</div>
              <h4 className="productPrice">₹{price}</h4>
              <p className="prductRatings">{ratings}</p>
            </div>
            <button className="addToCart">Add</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
