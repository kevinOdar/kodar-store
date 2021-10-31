import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from '../actions';

const product_reducer = (state, action) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        single_product_loading: true,
        single_product_error: false,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_product_loading: false,
        product: action.payload.product,
        single_product_error: false,
      };
    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      };
    case GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true, products_error: false };
    case GET_PRODUCTS_SUCCESS:
      const featured_products = action.payload.products.filter(
        (product) => product.featured === true
      );
      return {
        ...state,
        products_loading: false,
        products: action.payload.products,
        featured_products,
        products_error: false,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        products_loading: false,
        products_error: true,
      };
    default:
      break;
  }
  throw new Error(`Not matching ${action.type} - action type`);
};

export default product_reducer;
