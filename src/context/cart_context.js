import React, { createContext, useContext, useReducer } from 'react';
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';
import cart_reducer from '../reducers/cart_reducer';

const initialState = {
  products: [],
  subtotal: 0,
  shipping: 534,
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState);

  const addToCart = (product, selectedColor, quantity) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { product, selectedColor, quantity },
    });
  };

  const clearCart = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };

  const removeItem = (id, selectedColor) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: { id, selectedColor },
    });
  };

  const changeQuantityCartItem = (id, selectedColor, quantity) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: { id, selectedColor, quantity },
    });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        removeItem,
        changeQuantityCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(CartContext);
};

export { CartContext, useGlobalContext, CartProvider };
