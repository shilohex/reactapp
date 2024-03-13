// Importing React library for creating React components
import React from "react";

// Importing the product object from the "../product" module
import product from "../product";

// Functional component to display the description of the product
const Description = () => {
  // Rendering the description from the imported product object
  return <span>{product.description}</span>;
};

// Exporting the Description component as the default export
export default Description;
