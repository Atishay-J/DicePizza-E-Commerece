import "./Filter.css";

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

const toggleVeg = (productsData, isVeg) => {
  if (isVeg) {
    return [...productsData].filter((product) => product.isVeg === true);
  }
  return productsData;
};

const sortByPrices = (products, sortBy) => {
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
  console.log("DATA GOT FROM ISVEG", sortedData);
  if (sortBy === "relevance") {
    return [...sortedData];
  }
  return sortedData;
};

export {
  filterProducts,
  toggleVeg,
  sortByPrices,
  sortByRatings,
  sortByRelevances,
};
