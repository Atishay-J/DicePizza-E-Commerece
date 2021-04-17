import React, { useReducer } from "react";

import "./App.css";
import { data } from "./Data";
import { ProductCard } from "./Components";
import { Filters } from "./Components";

const filterProducts = (state, action) => {
  switch (action.type) {
    case "sortByPrice":
      return { ...state, sortByPrice: action.payload, sortByRelevance: null };
    case "sortByRatings":
      return { ...state, sortByRating: action.payload, sortByRelevance: null };
    case "sortByRelevance":
      return {
        ...state,
        sortByRelevance: action.payload,
        sortByPrice: null,
        sortByRating: null,
      };
    default:
      return state;
  }
};

const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case "priceLowToHigh":
      return [...products].sort((a, b) => a["price"] - b["price"]);

    case "priceHighToLow":
      return [...products].sort((a, b) => b["price"] - a["price"]);

    default:
      return products;
  }
};

const sortByRatings = (sortedByPrice, sortBy) => {
  switch (sortBy) {
    case "ratingsHighToLow":
      return sortedByPrice.sort((a, b) => b["ratings"] - a["ratings"]);

    case "ratingsLowToHigh":
      return sortedByPrice.sort((a, b) => a["ratings"] - b["ratings"]);

    default:
      return sortedByPrice;
  }
};

const sortByRelevances = (sortedData, sortBy) => {
  if (sortBy === "relevance") {
    return [...data];
  }
  return sortedData;
};

function App() {
  const [{ sortByPrice, sortByRating, sortByRelevance }, dispatch] = useReducer(
    filterProducts,
    {
      sortByPrice: null,
      sortByRating: null,
      sortByRelevance: null,
    }
  );

  const sortedByPrice = sortProducts(data, sortByPrice);
  const sortedByRatings = sortByRatings(sortedByPrice, sortByRating);
  const sortedByRelevance = sortByRelevances(sortedByRatings, sortByRelevance);

  return (
    <div className="App">
      <div className="mainContent-container">
        <Filters dispatch={dispatch} />

        <div className="products-container">
          {sortedByRelevance.map((items) => (
            <>
              <ProductCard
                key={items.id}
                image={items.pizzaImages}
                title={`
                 ${items.name}
                 ${
                   items.isVeg ? items.vegIngredients : items.nonVegIngredients
                 } 
                 ${items.generalIngredients}
                 ${items.verbs} 
                 Pizza
                 `}
                type={items.isVeg}
                price={items.price}
                ratings={items.ratings}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
