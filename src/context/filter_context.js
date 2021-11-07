import React, { createContext, useContext, useEffect, useReducer } from 'react';
import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from '../actions';
import { useGlobalContext as useGlobalContextProduct } from '../context/products_context';
import filter_reducer from '../reducers/filter_reducer';

const FilterContext = createContext();

let initialState = {
  filtered_products: [],
  products: [],
  grid_view: true,
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
  sort_options: [
    'price (lowest)',
    'price (highest)',
    'name (a - z)',
    'name (z - a)',
  ],
  selectedSortOption: 'price (lowest)',
};

const FilterProvider = ({ children }) => {
  const { products } = useGlobalContextProduct();
  const [state, dispatch] = useReducer(filter_reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: { products } });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS, payload: { products } });
  }, [state.selection, products]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [state.selectedSortOption, products]);

  const changeFilters = (selection) => {
    dispatch({ type: UPDATE_FILTERS, payload: { selection } });
  };

  const updateSort = (sort) => {
    dispatch({ type: UPDATE_SORT, payload: { sort } });
  };

  const clearFilters = () => {
    dispatch({
      type: CLEAR_FILTERS,
      payload: { initialSelection: initialState.selection },
    });
  };

  const setGridview = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListview = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        changeFilters,
        clearFilters,
        setGridview,
        setListview,
        updateSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useGlobalContext, FilterContext };
