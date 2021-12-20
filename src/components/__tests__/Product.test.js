import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import Product from '../Product';
import { mProductContext } from '../../utils/mock';

describe('Product test', () => {
  it('Details button on the product should redirect to the specific product page', () => {
    const history = createMemoryHistory();
    const firstProduct = mProductContext.product;
    render(
      <Router location={history.location} navigator={history}>
        <Product {...firstProduct} />
      </Router>
    );
    userEvent.click(screen.getByText('DETAILS'));
    expect(history.location.pathname).toBe('/products/' + firstProduct.id);
  });
});
