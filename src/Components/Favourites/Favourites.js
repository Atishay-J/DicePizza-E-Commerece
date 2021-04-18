import React from "react";
import { useCart } from "../index";
import { CartCard } from "../index";

export default function Favourites() {
  const { state } = useCart();

  return (
    <>
      <h1>I am favourites</h1>
      {state.favourites.length > 0 ? (
        state.favourites.map((item) => (
          <li key={item.id}>
            {
              <CartCard
                title={item.title}
                price={item.price}
                image={item.image}
                id={item.id}
                isVeg={item.type}
                dispatchType="REMOVE_FROM_FAVOURITES"
                btnName="Remove from favourites"
              />
            }
          </li>
        ))
      ) : (
        <h3>Add items to favourites</h3>
      )}
    </>
  );
}
