import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CartIcons from '../CartIcons';
import { SidebarContext } from '../../context/sidebar_context';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { mSidebarContext } from '../../utils/mock';

describe('CartIcons test', () => {
  it('Must have 2 icons/links', () => {
    const history = createMemoryHistory();
    render(
      <SidebarContext.Provider value={{ ...mSidebarContext }}>
        <Router location={history.location} navigator={history}>
          <CartIcons />
        </Router>
      </SidebarContext.Provider>
    );

    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});
