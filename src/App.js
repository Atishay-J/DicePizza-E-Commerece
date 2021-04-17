import React, { useReducer } from "react";

import "./App.css";

import { Products } from "./Components";
import { data } from "./Data";

import { FilterBtns } from "./Components";
import {
  filterProducts,
  sortByPrices,
  sortByRatings,
  sortByRelevances,
} from "./Components";

function App() {
  const [{ sortByPrice, sortByRating, sortByRelevance }, dispatch] = useReducer(
    filterProducts,
    {
      sortByPrice: null,
      sortByRating: null,
      sortByRelevance: null,
    }
  );

  let sortedByPrice = sortByPrices(data, sortByPrice);
  let sortedByRatings = sortByRatings(sortedByPrice, sortByRating);
  let sortedByRelevance = sortByRelevances(
    sortedByRatings,
    sortByRelevance,
    data
  );

  return (
    <div className="App">
      <div className="mainContent-container">
        <FilterBtns dispatch={dispatch} />

        <div className="products-container">
          <Products products={sortedByRelevance} />
        </div>
      </div>
    </div>
  );
}

export default App;
