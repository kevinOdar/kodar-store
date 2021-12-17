import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import Hero from '../Hero';
import { createMemoryHistory } from 'history';

describe('Hero test', () => {
  it('Rendering the Hero component', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Hero />
      </Router>
    );
  });
});