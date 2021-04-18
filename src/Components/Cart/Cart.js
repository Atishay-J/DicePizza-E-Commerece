import React from "react";
import { CartCard, useCart } from "../index";

export default function Cart() {
  const { state } = useCart();

  console.log("STATE FROM CART", state);

  return (
    <>
      <h1>I am cart</h1>
      {state.cart.length > 0 ? (
        state.cart.map((item) => (
          <li className="removeListStyle" key={item.id}>
            <CartCard
              title={item.title}
              price={item.price}
              image={item.image}
              id={item.id}
              isVeg={item.type}
              dispatchType="REMOVE_FROM_CART"
              btnName="Remove from cart"
            />
          </li>
        ))
      ) : (
        <h2>Cart is empty</h2>
      )}
    </>
  );
}
