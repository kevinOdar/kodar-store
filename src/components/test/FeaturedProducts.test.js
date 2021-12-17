import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { ProductContext } from '../../context/products_context';
import FeaturedProducts from '../FeaturedProducts';
import { createMemoryHistory } from 'history';
import { mProductContext } from "./mock";

describe('FeaturedProducts component', () => {
  const history = createMemoryHistory();

  it('Rendered without products errors', () => {
    mProductContext.products_loading = true;
    mProductContext.products_error = false;
  });

  it('Rendered with a products error', () => {
    mProductContext.products_loading = false;
    mProductContext.products_error = true;
  });

  it('Rendered with the loaded products', () => {
    mProductContext.products_loading = false;
    mProductContext.products_error = false;
  });

  afterEach(() => {
    render(
      <ProductContext.Provider value={{ ...mProductContext }}>
        <Router location={history.location} navigator={history}>
          <FeaturedProducts />
        </Router>
      </ProductContext.Provider>
    );
  })
});