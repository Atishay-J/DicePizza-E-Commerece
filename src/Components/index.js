//===============================================
//      INDEX FOR COMPONENTS
//==============================================

import {
  filterProducts,
  toggleVeg,
  sortByPrices,
  sortByRatings,
  sortByRelevances,
} from "./Filters/Filter";

import Products from "./Products/Products";
import ProductCard from "./Cards/ProductCards";
import CartCard from "./Cards/CartCard";
import FilterBtns from "./Filters/Filter-RadioBtns";
import FilterToggleBtn from "./Filters/Filter-ToggleBtn";
import ProductPage from "./Products/ProductsPage";
import Cart from "./Cart/Cart";
import Favourites from "./Favourites/Favourites";
import { CartContext, CartProvider, useCart } from "./Context/Cart-context";

export { Products, ProductCard, CartCard };
export {
  FilterBtns,
  FilterToggleBtn,
  filterProducts,
  toggleVeg,
  sortByPrices,
  sortByRatings,
  sortByRelevances,
};
export { Cart, Favourites, ProductPage };

export { CartContext, CartProvider, useCart };
