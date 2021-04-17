import React, { useReducer, useState } from "react";

import "./App.css";
import "./Components/Filters/Filter.css";
import { Products } from "./Components";
import { data } from "./Data";
import { FilterBtns } from "./Components";
import { FilterToggleBtn } from "./Components";
import {
  filterProducts,
  toggleVeg,
  sortByPrices,
  sortByRatings,
  sortByRelevances,
} from "./Components";

function App() {
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
  let sortedByRelevance = sortByRelevances(
    sortedByRatings,
    sortByRelevance,
    data
  );

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
