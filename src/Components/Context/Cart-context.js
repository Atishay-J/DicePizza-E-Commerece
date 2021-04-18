import React, { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  console.log("Cart Reducer Called", state);
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [action.payload, ...state.cart] };

    case "ADD_TO_FAVOURITES":
      return { ...state, favourites: [action.payload, ...state.favourites] };

    case "REMOVE_FROM_CART":
      console.log("ITEM REMOVED FROM CART");
      return {
        ...state,
        cart: state.cart.filter((prev) => prev.id !== action.payload.id),
      };

    case "REMOVE_FROM_FAVOURITES":
      console.log("ITEM REMOVED FROM FAVOURITES");
      return {
        ...state,
        favourites: state.favourites.filter(
          (prev) => prev.id !== action.payload.id
        ),
      };
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

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
