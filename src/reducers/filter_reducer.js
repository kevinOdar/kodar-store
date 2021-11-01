import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  UPDATE_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      const { products } = action.payload;

      const tempCompanies = new Set();
      tempCompanies.add('all');

      const tempCategories = new Set();
      tempCategories.add('all');

      const tempColors = new Set();

      products.forEach(({ company, category, colors, price }) => {
        tempCategories.add(category);
        tempCompanies.add(company);
        colors.forEach((color) => {
          tempColors.add(color);
        });

        if (price > state.options.highestPrice) {
          state.options.highestPrice = price;
        }
      });

      return {
        ...state,
        options: {
          categories: tempCategories,
          companies: tempCompanies,
          colors: tempColors,
          highestPrice: state.options.highestPrice,
        },
        selection: {
          ...state.selection,
          selectedPrice: state.options.highestPrice,
        },
        products,
        filtered_products: products,
      };

    case UPDATE_FILTERS:
      return { ...state, selection: action.payload.selection };

    case CLEAR_FILTERS:
      return {
        ...state,
        selection: {
          ...action.payload.initialSelection,
          selectedPrice: state.options.highestPrice,
        },
      };

    case FILTER_PRODUCTS:
      const {
        selection: {
          selectedCategory,
          selectedCompany,
          selectedColor,
          shipping: selectedShipping,
          selectedPrice,
          searchedName,
        },
      } = state;
      const filtered_products = action.payload.products.filter(
        ({ company, category, colors, shipping, price, name }) =>
          (selectedCompany !== 'all' ? selectedCompany === company : true) &&
          (selectedCategory !== 'all' ? selectedCategory === category : true) &&
          (selectedColor !== 'all'
            ? colors.some((color) => selectedColor === color)
            : true) &&
          (selectedShipping ? shipping : true) &&
          price <= selectedPrice &&
          name.startsWith(searchedName)
      );
      return { ...state, filtered_products };
    default:
      break;
  }
  throw new Error(`Not matching ${action.type} - action type`);
};

export default filter_reducer;
