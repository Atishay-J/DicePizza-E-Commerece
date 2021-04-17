import React from "react";
import ProductCard from "./ProductCards";

export default function Products({ products }) {
  return (
    <>
      {products.map((items) => (
        <li key={items.id}>
          <ProductCard
            image={items.pizzaImages}
            title={`
             ${items.name}
             ${items.isVeg ? items.vegIngredients : items.nonVegIngredients} 
             ${items.generalIngredients}
             ${items.verbs} 
             Pizza
             `}
            type={items.isVeg}
            price={items.price}
            ratings={items.ratings}
          />
        </li>
      ))}
    </>
  );
}
