// Importing React library for creating React components
import React from "react";

// Importing the product object from the "../product" module
import product from "../product";

// Functional component to display the name of the product
const Name = () => {
  return <span>{product.name}</span>;
};

// Exporting the Name component as the default export
export default Name;
