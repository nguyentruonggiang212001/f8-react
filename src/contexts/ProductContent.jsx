import { createContext } from "react";
import useProducts from "./../hook/useProducts";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={""}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
