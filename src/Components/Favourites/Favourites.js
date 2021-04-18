import React from "react";
import { useCart } from "../index";

export default function Favourites() {
  const { state } = useCart();

  return (
    <>
      <h1>I am favourites</h1>
      {state.favourites.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </>
  );
}
