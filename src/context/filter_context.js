import React, { createContext, useContext, useEffect, useReducer } from 'react';
import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  UPDATE_FILTERS,
} from '../actions';
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
    searchedName: '',
  },
};

const FilterProvider = ({ children }) => {
  const { products } = useGlobalContextProduct();
  const [state, dispatch] = useReducer(filter_reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: { products } });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS, payload: { products } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.selection]);

  const changeFilters = (selection) => {
    dispatch({ type: UPDATE_FILTERS, payload: { selection } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS, payload: { initialSelection: initialState.selection } });
  };

  return (
    <FilterContext.Provider value={{ ...state, changeFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useGlobalContext, FilterContext };
