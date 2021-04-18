import "./ProductCard.css";

import { useCart } from "../index";

const ProductCard = ({
  id,
  image,
  title,
  description,
  price,
  type,
  ratings,
}) => {
  const { dispatch } = useCart();

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
            <button
              className="addToCart"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: { id, image, title, price, type },
                })
              }
            >
              Add
            </button>
            <button
              className="addToFavourites"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_FAVOURITES",
                  payload: { id, image, title, price, type },
                })
              }
            >
              Add to Favourites
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
