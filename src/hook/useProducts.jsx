import { useEffect, useReducer } from "react";
import { initialState, productReducer } from "../reducers/productReducer";
import { createNew, deleteById, fetchProducts, updateById } from "../services";

const useProducts = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  useEffect(() => {
    async function allProducts() {
      const data = await fetchProducts("/products");
      dispatch({ type: "SET_PRODUCTS", payload: data });
    }
    allProducts();
  }, [dispatch]);

  const createProduct = async (dataProduct) => {
    const data = await createNew("/products", dataProduct);
    dispatch({ type: "ADD_PRODUCT", payload: data });
  };

  const removeProduct = async (id) => {
    if (confirm("Are you sure?")) {
      await deleteById("/products", id);
      dispatch({ type: "REMOVE_PRODUCT", payload: id });
    }
  };
  const updateProduct = async (id, product) => {
    const data = await updateById("/products", id, product);
    console.log(data);
    dispatch({ type: "UPDATE_PRODUCT", payload: data });
  };
  return {
    products: state.products,
    createProduct,
    removeProduct,
    updateProduct,
  };
};

export default useProducts;
