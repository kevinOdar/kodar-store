import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import EmptyCart from '../EmptyCart';
import { createMemoryHistory } from 'history';

describe('Empty cart test', () => {
  it('Rendering the Empty cart component', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <EmptyCart />
      </Router>
    );
  });
});
