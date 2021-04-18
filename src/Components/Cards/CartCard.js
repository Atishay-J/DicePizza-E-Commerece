import { useCart } from "../index";

const CartCard = ({ id, title, price, image, isVeg, dispatchType }) => {
  const { dispatch } = useCart();

  return (
    <>
      <div className="cartCardContainer">
        <div className="cartCardImageContainer">
          <img className="cartCardImage" src={image} alt="product" />
        </div>
        <div className="cartCardInfoContainer">
          <h1 className="cartCardTitle">{title}</h1>
          <h3 className="cartCardPrice">₹{price}</h3>
          <h5> Is Veg {isVeg}</h5>
          <button
            className="cartCardBtn"
            onClick={() => dispatch({ type: dispatchType, payload: { id } })}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default CartCard;
