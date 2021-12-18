import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { SidebarContext } from '../../context/sidebar_context';
import Navbar from '../Navbar';
import { createMemoryHistory } from 'history';
import { mSidebarContext } from '../../utils/mock';

describe('Navbar test', () => {
  it('Navbar was rendered', () => {
    const history = createMemoryHistory();
    render(
      <SidebarContext.Provider value={{ ...mSidebarContext }}>
        <Router location={history.location} navigator={history}>
          <Navbar />
        </Router>
      </SidebarContext.Provider>
    );
  });
});