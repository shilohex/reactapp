// Importing React library for creating React components
import React from "react";

// Importing the product object from the "../product" module
import product from "../product";

// Functional component to display the image of the product
const Image = () => {
  // Rendering the image path from the imported product object
  return <img src={product.path} alt="" />;
};

// Exporting the Image component as the default export
export default Image;
