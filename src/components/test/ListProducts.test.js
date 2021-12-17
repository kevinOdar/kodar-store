import ListProducts from '../ListProducts';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { mProductContext } from './mock';

describe('ListProducts test', () => {
  it('Rendering the ListProducts component', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <ListProducts products={mProductContext.featured_products} />
      </Router>
    );
  });
});
