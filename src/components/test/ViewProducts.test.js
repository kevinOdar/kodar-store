import { render } from '@testing-library/react';
import ViewProducts from '../ViewProducts';
import { Router } from 'react-router';
import { FilterContext } from '../../context/filter_context';
import { createMemoryHistory } from 'history';
import { mFilterContext } from './mock';

describe('ViewProducts test', () => {
  const history = createMemoryHistory();
  it('If the Grid_view is setting with true', () => {
    mFilterContext.grid_view = true;
  });

  it('If the Grid_view is setting with false', () => {
    mFilterContext.grid_view = false;
  });

  afterEach(() => {
    render(
      <FilterContext.Provider value={{ ...mFilterContext }}>
        <Router location={history.location} navigator={history}>
          <ViewProducts />
        </Router>
      </FilterContext.Provider>
    );
  });
});