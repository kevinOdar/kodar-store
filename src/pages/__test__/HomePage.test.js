import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { ProductContext } from '../../context/products_context';
import { mProductContext } from '../../utils/mock';
import HomePage from '../HomePage';

describe('AboutPage test', () => {
  it('Rendering about page', () => {
    const history = createMemoryHistory();
    render(
      <ProductContext.Provider value={{ ...mProductContext }}>
        <Router location={history.location} navigator={history}>
          <HomePage />
        </Router>
      </ProductContext.Provider>
    );
  });
});