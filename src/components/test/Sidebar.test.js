import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { SidebarContext } from '../../context/sidebar_context';
import Sidebar from '../Sidebar';
import { createMemoryHistory } from 'history';
import { mSidebarContext } from './mock';

describe('Sidebar test', () => {
  const history = createMemoryHistory();
  it('If the sidebar was closed', () => {
    mSidebarContext.isSidebarOpen = true;
  });

  it('If the sidebar is open', () => {
    mSidebarContext.isSidebarOpen = false;
  });

  afterEach(() => {
    render(
      <SidebarContext.Provider value={{ ...mSidebarContext }}>
        <Router location={history.location} navigator={history}>
          <Sidebar />
        </Router>
      </SidebarContext.Provider>
    );
  })
});
