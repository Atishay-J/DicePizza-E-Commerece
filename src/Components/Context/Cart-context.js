import React, { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  console.log("Cart Reducer Called");
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("Item Added To Cart, From Context");
      return { ...state, cart: [action.payload, ...state.cart] };

    case "ADD_TO_FAVOURITES":
      console.log("Item Added To FAvorites, From Context");
      return { ...state, favourites: [action.payload, ...state.favourites] };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    data: [],
    cart: [],
    favourites: [],
  });
  console.log("Value From Cart-Context", state);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
