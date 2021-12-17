import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { SidebarContext } from '../../context/sidebar_context';
import Header from '../Header';
import { createMemoryHistory } from 'history';
import { mSidebarContext } from './mock';

describe('Header test', () => {
  const history = createMemoryHistory();

  it('If the sidebar was closed', () => {
    mSidebarContext.isSidebarOpen = false;
  });

  it('If the sidebar was open', () => {
    mSidebarContext.isSidebarOpen = true;
  });

  afterEach(() => {
    render(
      <SidebarContext.Provider value={{ ...mSidebarContext }}>
        <Router location={history.location} navigator={history}>
          <Header />
        </Router>
      </SidebarContext.Provider>
    );
  })
});