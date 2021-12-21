import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { FilterContext } from '../../context/filter_context';
import { ProductContext } from '../../context/products_context';
import { mFilterContext, mProductContext } from '../../utils/mock';
import ProductsPage from '../ProductsPage';

describe('ProductsPage test', () => {
  const renderProductsPage = (products_loading, grid_view, products_error) => {
    mProductContext.products_loading = products_loading;
    mFilterContext.grid_view = grid_view;
    if (products_error) mProductContext.products_error = products_error;
    const history = createMemoryHistory();
    return render(
      <ProductContext.Provider value={{ ...mProductContext }}>
        <FilterContext.Provider value={{ ...mFilterContext }}>
          <Router location={history.location} navigator={history}>
            <ProductsPage />
          </Router>
        </FilterContext.Provider>
      </ProductContext.Provider>
    );
  };

  it('Should be able to select a sort option', () => {
    renderProductsPage(false, true);
    fireEvent.change(screen.getAllByRole(/combobox/)[1]);
    expect(mFilterContext.updateSort).toHaveBeenCalledTimes(1);
  });

  it('Should be rendered the spinner', () => {
    renderProductsPage(true, true);
  });

  it("Shouldn't be able to display the grid view", () => {
    renderProductsPage(false, false);
  });

  it('Should be able to display the error message', () => {
    renderProductsPage(false, false, true);
    expect(screen.getByText(/there was an error.../)).toBeInTheDocument();
  });
});
