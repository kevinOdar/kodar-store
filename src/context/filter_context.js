import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { LOAD_PRODUCTS, UPDATE_FILTERS } from '../actions';
import { useGlobalContext as useGlobalContextProduct } from '../context/products_context';
import filter_reducer from '../reducers/filter_reducer';

const FilterContext = createContext();

let initialState = {
  filtered_products: [],
  products: [],
  options: {
    categories: new Set(),
    companies: new Set(),
    colors: new Set(),
    highestPrice: 0,
  },
  selection: {
    selectedCategory: 'all',
    selectedCompany: 'all',
    selectedColor: 'all',
    shipping: false,
    selectedPrice: 0,
  },
};

const FilterProvider = ({ children }) => {
  const { products } = useGlobalContextProduct();
  const [state, dispatch] = useReducer(filter_reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: { products } });
  }, [products]);

  const changeFilters = (selection) => {
    dispatch({ type: UPDATE_FILTERS, payload: { selection } });
  };

  return (
    <FilterContext.Provider value={{ ...state, changeFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useGlobalContext, FilterContext };
