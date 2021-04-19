import React from "react";
import { CartCard, CartTotal, useCart } from "../index";
import "./cart.css";

export default function Cart() {
  const { state } = useCart();

  console.log("STATE FROM CART", state);

  // const totalPrice = () => {
  let priceArr = [];
  state.cart.map((item) => (priceArr = [...priceArr, parseFloat(item.price)]));

  let price = priceArr.reduce((a, b) => a + b, 0);

  let itemQty = priceArr.length;

  // return { price, itemQty };
  // };

  return (
    <>
      <div className="mainCartContainer">
        <h1>I am cart</h1>{" "}
        {state.cart.length <= 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          <div className="cartWrapper">
            <div className="cartContainer">
              {state.cart.map((item) => (
                <li className="removeListStyle" key={item.id}>
                  <CartCard
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                    isVeg={item.type}
                    qty={item.qty}
                    dispatchType="REMOVE_FROM_CART"
                    btnName="Remove from cart"
                  />
                </li>
              ))}
            </div>
            <div className="cartCheckoutContainer">
              <CartTotal price={price} qty={itemQty} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
