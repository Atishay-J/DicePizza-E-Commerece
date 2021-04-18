import React, { useReducer, useState } from "react";

import { Products } from "../index";
import { data } from "../../Data";
import { FilterBtns } from "../index";
import { FilterToggleBtn } from "../index";
import {
  filterProducts,
  toggleVeg,
  sortByPrices,
  sortByRatings,
  sortByRelevances,
} from "../index";

function ProductPage() {
  const [isVeg, setIsVeg] = useState(false);
  const [{ sortByPrice, sortByRating, sortByRelevance }, dispatch] = useReducer(
    filterProducts,
    {
      sortByPrice: null,
      sortByRating: null,
      sortByRelevance: null,
    }
  );

  const handleIsVegToggle = (event) => {
    setIsVeg(event.target.checked);
  };

  let sortedByIsVeg = toggleVeg(data, isVeg);
  let sortedByPrice = sortByPrices(sortedByIsVeg, sortByPrice);
  let sortedByRatings = sortByRatings(sortedByPrice, sortByRating);
  let sortedByRelevance = sortByRelevances(sortedByRatings, sortByRelevance);

  return (
    <div className="mainContentContainer">
      <div className="mainFilterContainer">
        <FilterBtns dispatch={dispatch} />
        <div className="mainToggleContainer">
          <FilterToggleBtn handleToggle={handleIsVegToggle} />
        </div>
      </div>
      <div className="productsContainer">
        <Products products={sortedByRelevance} />
      </div>
    </div>
  );
}

export default ProductPage;
