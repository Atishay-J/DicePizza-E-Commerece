import React from "react";
import { CartCard, useCart } from "../index";

export default function Cart() {
  const { state } = useCart();

  return (
    <>
      <h1>I am cart</h1>
      {state.cart.map((item) => (
        <li className="removeListStyle" key={item.id}>
          <CartCard
            title={item.title}
            price={item.price}
            image={item.image}
            id={item.id}
            isVeg={item.type}
            dispatchType="REMOVE_FROM_CART"
          />
        </li>
      ))}
    </>
  );
}
