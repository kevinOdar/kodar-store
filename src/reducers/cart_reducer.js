import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
} from '../actions';

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product, selectedColor, quantity } = action.payload;
      if (
        state.products.find(
          (productInCart) =>
            (productInCart.id === product.id) &&
            (productInCart.selectedColor === selectedColor)
        )
      ) {
        const products = state.products.map((productInCart) => {
          if (
            productInCart.id === product.id &&
            productInCart.selectedColor === selectedColor
          ) {
            return {
              ...productInCart,
              quantity:
                productInCart.quantity + quantity > productInCart.stock
                  ? productInCart.stock
                  : productInCart.quantity + quantity,
            };
          } else {
            return { ...productInCart };
          }
        });
        state.products = products;
      } else {
        const newProduct = {
          ...product,
          selectedColor,
          quantity,
        };
        state.products = [...state.products, newProduct];
      }
      return {
        ...state,
        subtotal: state.products
          .map((productInCart) => productInCart.quantity * productInCart.price)
          .reduce((a, b) => a + b, 0),
      };

    case CLEAR_CART:
      return {
        ...state,
        products: [],
        subtotal: 0,
      };

    case REMOVE_CART_ITEM:
      const { id, selectedColor: removedSelectedColor } = action.payload;
      const productToDelete = state.products.find(
        (product) =>
          product.id === id && product.selectedColor === removedSelectedColor
      );

      const newProducts = state.products.filter(
        (product) =>
          !(product.id === id && product.selectedColor === removedSelectedColor)
      );
      return {
        ...state,
        products: newProducts,
        subtotal:
          state.subtotal - productToDelete.quantity * productToDelete.price,
      };
    case TOGGLE_CART_ITEM_AMOUNT:
      const products = state.products.map((productInCart) => {
        if (
          productInCart.id === action.payload.id &&
          productInCart.selectedColor === action.payload.selectedColor
        ) {
          return {
            ...productInCart,
            quantity: action.payload.quantity,
          };
        } else {
          return { ...productInCart };
        }
      });
      return {
        ...state,
        products,
        subtotal: products
          .map((productInCart) => productInCart.quantity * productInCart.price)
          .reduce((a, b) => a + b, 0),
      };

    default:
      break;
  }

  throw new Error(`Not matching ${action.type} - action type`);
};

export default cart_reducer;
