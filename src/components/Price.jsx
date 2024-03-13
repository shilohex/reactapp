// Importing React library for creating React components
import React from "react";

// Importing the product object from the "../product" module
import product from "../product";

// Functional component to display the price of the product
const Price = () => {
  return <span>{product.price}</span>;
};

// Exporting the Price component as the default export
export default Price;
