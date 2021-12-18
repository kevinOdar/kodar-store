import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import GridProducts from '../GridProducts';
import { createMemoryHistory } from 'history';
import { mProductContext } from '../../utils/mock';

describe('GridProducts test', () => {
  it('Rendering GridProducts component', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <GridProducts products={mProductContext.featured_products} />
      </Router>
    );
  });
});
