import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import ErrorPage from '../ErrorPage';

describe('ErrorPage test', () => {
  it('Rendering error page', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <ErrorPage />
      </Router>
    );
  });
});
