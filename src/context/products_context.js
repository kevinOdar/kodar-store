import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { single_product_url, products_url } from '../utils/constants';
import product_reducer from '../reducers/product_reducer';
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_PRODUCTS_ERROR,
} from '../actions';

const ProductContext = createContext();

const initialState = {
  products_loading: true,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: true,
  single_product_error: false,
  single_product: {},
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(product_reducer, initialState);

  const fetchProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await fetch(single_product_url + id);
      const product = await response.json();
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: { product } });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await fetch(products_url);
      const products = await response.json();
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: { products: products } });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        ...state,
        fetchProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ProductContext);
};

export { ProductsProvider, ProductContext };
