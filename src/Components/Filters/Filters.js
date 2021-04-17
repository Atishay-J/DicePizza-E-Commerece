import { useState } from "react";
import "./Filter.css";

const Filters = ({ dispatch }) => {
  const [isChecked, setIsChecked] = useState({
    sortByPrice: null,
    sortByRatings: null,
    sortByRelevance: "relevance",
  });

  const handleChange = (event) => {
    switch (event.target.name) {
      case "sortByPrice":
        setIsChecked({
          ...isChecked,
          sortByPrice: event.target.value,
          sortByRelevance: false,
        });
        return dispatch({
          type: event.target.name,
          payload: event.target.value,
        });

      case "sortByRatings":
        setIsChecked({
          ...isChecked,
          sortByRatings: event.target.value,
          sortByRelevance: false,
        });
        return dispatch({
          type: event.target.name,
          payload: event.target.value,
        });

      case "sortByRelevance":
        setIsChecked({
          ...isChecked,
          sortByRelevance: event.target.value,
          sortByRatings: false,
          sortByPrice: false,
        });
        return dispatch({
          type: event.target.name,
          payload: event.target.value,
        });

      default:
        return null;
    }
  };

  return (
    <>
      <div className="filter-container">
        <h1>Hello I am filter</h1>
        <fieldset>
          <legend>Sort By</legend>
          <label>
            <input
              type="radio"
              name="sortByPrice"
              value="priceLowToHigh"
              checked={isChecked.sortByPrice === "priceLowToHigh"}
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <span className="sortName">Price : </span> Low to High
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="sortByPrice"
              value="priceHighToLow"
              checked={isChecked.sortByPrice === "priceHighToLow"}
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <span className="sortName">Price : </span> High to Low
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="sortByRatings"
              value="ratingsHighToLow"
              checked={isChecked.sortByRatings === "ratingsHighToLow"}
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <span className="sortName">Ratings : </span> High to Low
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="sortByRatings"
              value="ratingsLowToHigh"
              checked={isChecked.sortByRatings === "ratingsLowToHigh"}
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <span className="sortName">Ratings : </span> Low To High
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="sortByRelevance"
              value="relevance"
              checked={isChecked.sortByRelevance === "relevance"}
              onChange={(event) => {
                handleChange(event);
              }}
            />
            <span className="sortName">Ratings : </span> Relevance
          </label>
        </fieldset>
      </div>
    </>
  );
};
export default Filters;
