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
      return {
        ...state,
        filtered_products,
      };

    case SET_GRIDVIEW:
      return { ...state, grid_view: true };

    case SET_LISTVIEW:
      return { ...state, grid_view: false };

    case SORT_PRODUCTS:
      switch (state.selectedSortOption) {
        case 'price (lowest)':
          for (let i = 0; i < state.filtered_products.length - 1; i++) {
            for (let i = 0; i < state.filtered_products.length - 1; i++) {
              const price1 = state.filtered_products[i].price;
              const price2 = state.filtered_products[i + 1].price;

              if (price1 > price2) {
                const newElement = state.filtered_products[i];
                state.filtered_products[i] = state.filtered_products[i + 1];
                state.filtered_products[i + 1] = newElement;
              }
            }
          }
          break;
        case 'price (highest)':
          for (let i = 0; i < state.filtered_products.length - 1; i++) {
            for (let i = 0; i < state.filtered_products.length - 1; i++) {
              const price1 = state.filtered_products[i].price;
              const price2 = state.filtered_products[i + 1].price;

              if (price1 < price2) {
                const newElement = state.filtered_products[i];
                state.filtered_products[i] = state.filtered_products[i + 1];
                state.filtered_products[i + 1] = newElement;
              }
            }
          }
          break;
        case 'name (a - z)':
          for (let i = 0; i < state.filtered_products.length - 1; i++) {
            for (let i = 0; i < state.filtered_products.length - 1; i++) {
              const name1 = state.filtered_products[i].name;
              const name2 = state.filtered_products[i + 1].name;

              if (name1.localeCompare(name2) === 1) {
                const newElement = state.filtered_products[i];
                state.filtered_products[i] = state.filtered_products[i + 1];
                state.filtered_products[i + 1] = newElement;
              }
            }
          }
          break;
        case 'name (z - a)':
          for (let i = 0; i < state.filtered_products.length - 1; i++) {
            for (let i = 0; i < state.filtered_products.length - 1; i++) {
              const name1 = state.filtered_products[i].name;
              const name2 = state.filtered_products[i + 1].name;

              if (name1.localeCompare(name2) === -1) {
                const newElement = state.filtered_products[i];
                state.filtered_products[i] = state.filtered_products[i + 1];
                state.filtered_products[i + 1] = newElement;
              }
            }
          }
          break;
        default:
          break;
      }
      return { ...state };

    case UPDATE_SORT:
      return { ...state, selectedSortOption: action.payload.sort };
    default:
      break;
  }
  throw new Error(`Not matching ${action.type} - action type`);
};

export default filter_reducer;
