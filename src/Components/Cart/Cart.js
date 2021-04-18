import React from "react";
import { useCart } from "../index";

export default function Cart() {
  const { state } = useCart();

  return (
    <>
      <h1>I am cart</h1>
      {state.cart.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </>
  );
}
