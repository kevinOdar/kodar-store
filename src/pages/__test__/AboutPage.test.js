import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import AboutPage from '../AboutPage';

describe('AboutPage test', () => {
  it('Rendering about page', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <AboutPage />
      </Router>
    );
  });
});
