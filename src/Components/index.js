//===============================================
//      INDEX FOR COMPONENTS
//==============================================

import Products from "./Products/Products";
import ProductCard from "./Products/ProductCards";
import FilterBtns from "./Filters/Filter-RadioBtns";
import {
  filterProducts,
  toggleVeg,
  sortByPrices,
  sortByRatings,
  sortByRelevances,
} from "./Filters/Filter";
import FilterToggleBtn from "./Filters/Filter-ToggleBtn";
import ProductPage from "./Products/ProductsPage";
import Cart from "./Cart/Cart";
import Favourites from "./Favourites/Favourites";

export { Products, ProductCard };
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
