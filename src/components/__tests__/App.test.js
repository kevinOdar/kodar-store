import { render } from '@testing-library/react';
import { mSidebarContext, mProductContext } from '../../utils/mock';
import { SidebarContext } from '../../context/sidebar_context';
import App from '../../App';
import { ProductContext } from '../../context/products_context';

describe('App test', () => {
  it('Rendering app component', () => {
    render(
      <SidebarContext.Provider value={{ ...mSidebarContext }}>
        <ProductContext.Provider value={{ ...mProductContext }}>
          <App />
        </ProductContext.Provider>
      </SidebarContext.Provider>
    );
  });
});
